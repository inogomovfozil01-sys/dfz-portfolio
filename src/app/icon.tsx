import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: 'linear-gradient(135deg, #6D7CFF 0%, #4338CA 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 800,
          borderRadius: '8px',
          fontFamily: 'sans-serif',
          letterSpacing: '-0.5px',
        }}
      >
        DFZ
      </div>
    ),
    {
      ...size,
    }
  );
}
