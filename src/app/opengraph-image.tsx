import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Fozil Inogomov (DFZ) — Full-Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#08090D',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          color: '#F5F6FA',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            right: '-150px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(109, 124, 255, 0.25) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6D7CFF 0%, #4338CA 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px',
              fontWeight: 800,
            }}
          >
            DFZ
          </div>
          <span style={{ fontSize: '24px', color: '#969BA8', fontWeight: 600 }}>
            fozil.dev • @inogomovfozil01-sys
          </span>
        </div>

        {/* Center Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 900,
              letterSpacing: '-1.5px',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Fozil Inogomov
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#6D7CFF',
              fontWeight: 700,
              margin: 0,
            }}
          >
            Full-Stack Developer & AI Systems Builder
          </p>
          <p
            style={{
              fontSize: '22px',
              color: '#969BA8',
              maxWidth: '850px',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Engineering modern digital products, scalable web architectures (Next.js, TypeScript, PostgreSQL), and Gemini AI integrations.
          </p>
        </div>

        {/* Bottom Tech Pills */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['Next.js 16', 'TypeScript', 'Google Gemini AI', 'PostgreSQL', 'Socket.IO', 'Prisma ORM'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: '#101218',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '16px',
                  color: '#F5F6FA',
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
