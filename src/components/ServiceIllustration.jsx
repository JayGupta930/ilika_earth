// Lightweight, decorative UI objects. Each illustration shares the card's palette.
export default function ServiceIllustration({ kind }) {
  const gradient = `service-${kind}`;
  return (
    <svg viewBox="0 0 200 220" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradient} x1="20" y1="20" x2="175" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="var(--soft)" />
        </linearGradient>
        <linearGradient id={`${gradient}-accent`} x2="1" y2="1">
          <stop stopColor="var(--tint)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
        <filter id={`${gradient}-shadow`} x="-50%" y="-50%" width="200%" height="220%">
          <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="var(--accent)" floodOpacity=".15" />
        </filter>
        <pattern id={`${gradient}-weave`} width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M0 1h4M1 0v4" stroke="white" strokeOpacity=".25" strokeWidth=".7" />
        </pattern>
      </defs>
      <g filter={`url(#${gradient}-shadow)`}>
        {kind === 'analytics' && <g transform="translate(28 43) rotate(-12 75 80)">
          <rect x="0" y="8" width="142" height="142" rx="22" fill={`url(#${gradient})`} stroke="white" strokeWidth="2" />
          {[30, 49, 70, 93, 113].map((height, i) => <rect key={height} x={19 + i * 23} y={130 - height} width="15" height={height} rx="5" fill={`url(#${gradient}-accent)`} opacity={.5 + i * .125} />)}
          <path d="m25 90 22-21 23 1 24-31 24-16" stroke="var(--accent)" strokeWidth="2" opacity=".3" />
        </g>}
        {kind === 'design' && <>
          <g stroke="var(--accent)" opacity=".1" transform="rotate(16 100 110)">
            {[20, 55, 90, 125, 160, 195].map(n => <path key={n} d={`M${n} 12v190M5 ${n}h190`} />)}
          </g>
          <g transform="rotate(18 100 110)">
            <rect x="42" y="55" width="126" height="128" rx="18" fill="var(--tint)" />
            <rect x="30" y="42" width="126" height="128" rx="18" fill={`url(#${gradient})`} stroke="white" strokeWidth="2" />
            <path d="m85 112 30-54c7-11 23-1 17 10l-34 52z" fill={`url(#${gradient}-accent)`} />
            <path d="m87 113 13 8-9 11-12-7z" fill="#a9bdf5" />
            <path d="M80 125c-14 2-4 16-17 23 18 2 29-5 28-15z" fill="var(--accent)" />
            <path d="m110 77 10-17" stroke="white" strokeOpacity=".65" strokeWidth="3" strokeLinecap="round" />
          </g>
        </>}
        {kind === 'materials' && <g transform="rotate(17 100 110)">
          <rect x="56" y="80" width="120" height="122" rx="13" fill="#a8ada8" />
          <rect x="38" y="56" width="120" height="122" rx="13" fill="#f1eddf" />
          <rect x="20" y="31" width="120" height="122" rx="13" fill="#719650" />
          <rect x="20" y="31" width="120" height="122" rx="13" fill={`url(#${gradient}-weave)`} />
          <g transform="rotate(-17 145 132)">
            <rect x="121" y="105" width="48" height="48" rx="12" fill="white" />
            <path d="M135 136c-9-16 6-23 23-21-1 18-9 26-19 20m-5 9 16-21" fill="#4d9a79" stroke="white" strokeWidth="1.5" />
          </g>
        </g>}
        {kind === 'preview' && <g transform="rotate(-5 100 110)">
          <rect x="27" y="25" width="146" height="175" rx="22" fill={`url(#${gradient})`} stroke="white" strokeWidth="2" />
          <ellipse cx="99" cy="173" rx="55" ry="13" stroke="#dc9b58" strokeWidth="2" />
          <path d="m70 127-13 49m63-49 15 49M85 132l-3 39m26-40 7 36" stroke="#b48c63" strokeWidth="6" strokeLinecap="round" />
          <path d="M65 110 76 63c4-15 47-17 51 0l2 48-9 22H75z" fill="#dfddd6" />
          <path d="M68 106 79 66c3-9 34-12 36 0l3 42" fill="#eeede8" />
          <ellipse cx="95" cy="123" rx="37" ry="14" fill="#c7c6c0" />
          <ellipse cx="95" cy="118" rx="37" ry="13" fill="#faf9f5" />
          <rect x="131" y="34" width="35" height="33" rx="9" fill="white" />
          <text x="148" y="56" textAnchor="middle" fill="#172039" fontSize="15" fontWeight="700">3D</text>
        </g>}
        {kind === 'collaboration' && <>
          {[{ x: 74, y: 66, r: 34 }, { x: 130, y: 88, r: 32 }].map(({ x, y, r }, i) => <g key={x} opacity={i ? .85 : 1}>
            <circle cx={x} cy={y} r={r} fill={`url(#${gradient}-accent)`} stroke="#ecfff5" strokeWidth="2" />
            <circle cx={x} cy={y - 8} r="9" fill={i ? '#57a994' : '#176a58'} />
            <path d={`M${x - 16} ${y + 20}v-7c0-16 32-16 32 0v7q-16 9-32 0`} fill={i ? '#57a994' : '#e5fff4'} />
          </g>)}
          <g transform="rotate(-6 100 150)">
            <rect x="29" y="128" width="148" height="65" rx="15" fill={`url(#${gradient})`} stroke="white" strokeWidth="2" />
            {[108, 80, 61].map((width, i) => <rect key={width} x="44" y={143 + i * 14} width={width} height="6" rx="3" fill="var(--accent)" opacity={.17 + i * .08} />)}
          </g>
        </>}
        {kind === 'support' && <>
          <path d="M96 107h65a17 17 0 0 1 17 17v48a17 17 0 0 1-17 17h-1v15l-22-15H96a17 17 0 0 1-17-17v-48a17 17 0 0 1 17-17Z" fill="#f6b1c4" />
          <path d="M44 57h80a21 21 0 0 1 21 21v52a21 21 0 0 1-21 21H68l-21 17v-17h-3a21 21 0 0 1-21-21V78a21 21 0 0 1 21-21Z" fill={`url(#${gradient})`} stroke="white" strokeWidth="2" />
          {[65, 85, 105].map(x => <circle key={x} cx={x} cy="105" r="5.5" fill="#9990bb" />)}
          <path d="M144 43v-10m11 17 8-9m-2 20h10" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" />
        </>}
      </g>
    </svg>
  );
}
