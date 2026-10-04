import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Honeypot check (anti-spam)
    if (body.honeypot) {
      return NextResponse.json({ ok: true, message: 'Spam detected' }, { status: 200 });
    }

    const clean = (val: unknown): string =>
      typeof val === 'string'
        ? val.trim().replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, '')
        : '';

    const name = clean(body.name);
    const email = clean(body.email);
    const message = clean(body.message);

    // 2. Validation
    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { ok: false, message: 'Имя должно содержать от 2 до 100 символов' },
        { status: 400 }
      );
    }

    const contactValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      /^@[A-Za-z0-9_]{3,32}$/.test(email) ||
      /^\+?[\d\s()\-]{7,30}$/.test(email);

    if (!email || !contactValid) {
      return NextResponse.json(
        { ok: false, message: 'Укажите корректный email, @telegram или номер телефона' },
        { status: 400 }
      );
    }

    if (!message || message.length < 5 || message.length > 3000) {
      return NextResponse.json(
        { ok: false, message: 'Сообщение должно быть от 5 до 3000 символов' },
        { status: 400 }
      );
    }

    // 3. Telegram Bot Notification
    const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

    if (!token || !chatId) {
      console.warn('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing in environment.');
      return NextResponse.json(
        { ok: true, fallback: true, message: 'Bot credentials not configured, fallback enabled' },
        { status: 200 }
      );
    }

    const timestamp = new Date().toLocaleString('ru-RU', {
      timeZone: 'Asia/Tashkent',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const text = [
      '🚀 *Новая заявка с сайта DFZ Portfolio*',
      '',
      `👤 *Имя:* ${name.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&')}`,
      `📫 *Контакт:* ${email.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&')}`,
      `⏰ *Время (Ташкент):* ${timestamp}`,
      '',
      '💬 *Сообщение:*',
      message.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&'),
    ].join('\n');

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'MarkdownV2',
        link_preview_options: { is_disabled: true },
      }),
      signal: AbortSignal.timeout(10000),
    });

    const data = await res.json();

    if (!res.ok || data.ok !== true) {
      console.error('Telegram API error:', data);
      return NextResponse.json(
        { ok: false, message: 'Ошибка при отправке в Telegram' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: 'Сообщение успешно отправлено!' });
  } catch (err: unknown) {
    console.error('API Contact route error:', err);
    return NextResponse.json(
      { ok: false, message: 'Внутренняя ошибка сервера при отправке' },
      { status: 500 }
    );
  }
}
