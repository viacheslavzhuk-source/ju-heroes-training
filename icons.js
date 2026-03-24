// ===== JU Heroes Training — SVG Icon System =====
// High-quality 3D-style SVG icons with gradients and glow

const ICONS = {};

// Helper: wrap icon SVG with consistent viewBox
function icon(id, svg) {
    ICONS[id] = `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`;
}

// ===== Shared Gradients & Filters =====
const DEFS = `
<defs>
  <linearGradient id="g-gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffeaa7"/><stop offset="100%" stop-color="#fdcb6e"/></linearGradient>
  <linearGradient id="g-gold-dark" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f9ca24"/><stop offset="100%" stop-color="#e17055"/></linearGradient>
  <linearGradient id="g-fire" x1="0%" y1="100%" x2="50%" y2="0%"><stop offset="0%" stop-color="#d63031"/><stop offset="40%" stop-color="#e17055"/><stop offset="70%" stop-color="#fdcb6e"/><stop offset="100%" stop-color="#ffeaa7"/></linearGradient>
  <linearGradient id="g-bolt" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffeaa7"/><stop offset="100%" stop-color="#fdcb6e"/></linearGradient>
  <linearGradient id="g-purple" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#a29bfe"/><stop offset="100%" stop-color="#6c5ce7"/></linearGradient>
  <linearGradient id="g-teal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#81ecec"/><stop offset="100%" stop-color="#00cec9"/></linearGradient>
  <linearGradient id="g-blue" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#74b9ff"/><stop offset="100%" stop-color="#0984e3"/></linearGradient>
  <linearGradient id="g-green" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#55efc4"/><stop offset="100%" stop-color="#00b894"/></linearGradient>
  <linearGradient id="g-diamond" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#dfe6e9"/><stop offset="30%" stop-color="#81ecec"/><stop offset="60%" stop-color="#a29bfe"/><stop offset="100%" stop-color="#74b9ff"/></linearGradient>
  <linearGradient id="g-silver" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#dfe6e9"/><stop offset="100%" stop-color="#b2bec3"/></linearGradient>
  <linearGradient id="g-bronze" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e17055"/><stop offset="100%" stop-color="#d35400"/></linearGradient>
  <linearGradient id="g-iron" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#636e72"/><stop offset="100%" stop-color="#2d3436"/></linearGradient>
  <filter id="glow-gold"><feGaussianBlur stdDeviation="2" result="b"/><feFlood flood-color="#fdcb6e" flood-opacity="0.5"/><feComposite in2="b" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="glow-teal"><feGaussianBlur stdDeviation="2" result="b"/><feFlood flood-color="#00cec9" flood-opacity="0.5"/><feComposite in2="b" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="glow-purple"><feGaussianBlur stdDeviation="2" result="b"/><feFlood flood-color="#a29bfe" flood-opacity="0.5"/><feComposite in2="b" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="glow-fire"><feGaussianBlur stdDeviation="2.5" result="b"/><feFlood flood-color="#e17055" flood-opacity="0.5"/><feComposite in2="b" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="glow-blue"><feGaussianBlur stdDeviation="2" result="b"/><feFlood flood-color="#74b9ff" flood-opacity="0.5"/><feComposite in2="b" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="glow-green"><feGaussianBlur stdDeviation="2" result="b"/><feFlood flood-color="#00b894" flood-opacity="0.4"/><feComposite in2="b" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.4"/></filter>
</defs>`;

// ========================
// PULL-UPS
// ========================

// pullup-1: Beginner — person hanging on bar
icon('pullup-1', `${DEFS}
<rect x="8" y="12" width="48" height="4" rx="2" fill="url(#g-silver)" filter="url(#shadow)"/>
<rect x="10" y="8" width="4" height="8" rx="1" fill="url(#g-iron)"/>
<rect x="50" y="8" width="4" height="8" rx="1" fill="url(#g-iron)"/>
<g filter="url(#glow-green)">
  <circle cx="32" cy="26" r="5" fill="url(#g-green)"/>
  <rect x="29" y="31" width="6" height="10" rx="2" fill="url(#g-green)"/>
  <line x1="27" y1="16" x2="29" y2="26" stroke="url(#g-green)" stroke-width="3" stroke-linecap="round"/>
  <line x1="37" y1="16" x2="35" y2="26" stroke="url(#g-green)" stroke-width="3" stroke-linecap="round"/>
  <line x1="30" y1="41" x2="28" y2="52" stroke="url(#g-green)" stroke-width="3" stroke-linecap="round"/>
  <line x1="34" y1="41" x2="36" y2="52" stroke="url(#g-green)" stroke-width="3" stroke-linecap="round"/>
</g>
<circle cx="32" cy="26" r="2" fill="#fff" opacity="0.6"/>
`);

// pullup-3: Medium — muscular arm on bar
icon('pullup-3', `${DEFS}
<rect x="8" y="14" width="48" height="4" rx="2" fill="url(#g-silver)" filter="url(#shadow)"/>
<rect x="10" y="10" width="4" height="8" rx="1" fill="url(#g-iron)"/>
<rect x="50" y="10" width="4" height="8" rx="1" fill="url(#g-iron)"/>
<g filter="url(#glow-teal)">
  <circle cx="32" cy="22" r="5" fill="url(#g-teal)"/>
  <rect x="29" y="12" width="3" height="10" rx="1" fill="url(#g-teal)"/>
  <rect x="33" y="12" width="3" height="10" rx="1" fill="url(#g-teal)"/>
  <rect x="28" y="27" width="8" height="12" rx="3" fill="url(#g-teal)"/>
  <line x1="30" y1="39" x2="28" y2="50" stroke="url(#g-teal)" stroke-width="3" stroke-linecap="round"/>
  <line x1="34" y1="39" x2="36" y2="50" stroke="url(#g-teal)" stroke-width="3" stroke-linecap="round"/>
</g>
<text x="32" y="60" text-anchor="middle" font-size="9" font-weight="bold" fill="url(#g-teal)" opacity="0.7">x3</text>
`);

// pullup-5: Fire pull-up
icon('pullup-5', `${DEFS}
<rect x="8" y="12" width="48" height="4" rx="2" fill="url(#g-silver)" filter="url(#shadow)"/>
<g filter="url(#glow-fire)">
  <circle cx="32" cy="22" r="5" fill="url(#g-fire)"/>
  <rect x="28" y="27" width="8" height="12" rx="3" fill="#e17055"/>
  <rect x="29" y="12" width="3" height="10" rx="1" fill="#e17055"/>
  <rect x="33" y="12" width="3" height="10" rx="1" fill="#e17055"/>
  <line x1="30" y1="39" x2="28" y2="49" stroke="#e17055" stroke-width="3" stroke-linecap="round"/>
  <line x1="34" y1="39" x2="36" y2="49" stroke="#e17055" stroke-width="3" stroke-linecap="round"/>
</g>
<g filter="url(#glow-fire)" opacity="0.8">
  <ellipse cx="32" cy="50" rx="10" ry="6" fill="url(#g-fire)" opacity="0.5"/>
  <path d="M26 54 Q29 42 32 48 Q35 42 38 54 Q32 50 26 54Z" fill="url(#g-fire)"/>
</g>
`);

// pullup-10: Lightning bar
icon('pullup-10', `${DEFS}
<rect x="6" y="14" width="52" height="5" rx="2.5" fill="url(#g-gold)" filter="url(#shadow)"/>
<rect x="8" y="9" width="5" height="10" rx="2" fill="url(#g-gold-dark)"/>
<rect x="51" y="9" width="5" height="10" rx="2" fill="url(#g-gold-dark)"/>
<g filter="url(#glow-gold)">
  <polygon points="36,20 28,36 33,36 27,52 40,32 34,32 40,20" fill="url(#g-bolt)"/>
</g>
<circle cx="22" cy="30" r="2" fill="#ffeaa7" opacity="0.5"/>
<circle cx="44" cy="26" r="1.5" fill="#ffeaa7" opacity="0.4"/>
<circle cx="18" cy="42" r="1" fill="#ffeaa7" opacity="0.3"/>
<circle cx="46" cy="44" r="1.5" fill="#ffeaa7" opacity="0.35"/>
`);

// pullup-wide: Eagle wingspan
icon('pullup-wide', `${DEFS}
<rect x="4" y="18" width="56" height="4" rx="2" fill="url(#g-silver)" filter="url(#shadow)" opacity="0.5"/>
<g filter="url(#glow-purple)">
  <path d="M32 20 Q18 10 6 18 Q14 16 22 22Z" fill="url(#g-purple)"/>
  <path d="M32 20 Q46 10 58 18 Q50 16 42 22Z" fill="url(#g-purple)"/>
  <path d="M32 20 Q24 14 10 20 Q18 19 26 24Z" fill="url(#g-purple)" opacity="0.6"/>
  <path d="M32 20 Q40 14 54 20 Q46 19 38 24Z" fill="url(#g-purple)" opacity="0.6"/>
  <ellipse cx="32" cy="30" rx="6" ry="8" fill="url(#g-purple)"/>
  <circle cx="32" cy="24" r="5" fill="#a29bfe"/>
  <circle cx="30" cy="23" r="1.5" fill="#fff"/>
  <circle cx="34" cy="23" r="1.5" fill="#fff"/>
  <polygon points="32,26 30,28 34,28" fill="#6c5ce7"/>
</g>
<line x1="26" y1="18" x2="22" y2="14" stroke="url(#g-purple)" stroke-width="2" stroke-linecap="round"/>
<line x1="38" y1="18" x2="42" y2="14" stroke="url(#g-purple)" stroke-width="2" stroke-linecap="round"/>
`);

// ========================
// PUSH-UPS
// ========================

// pushup-5: Fist
icon('pushup-5', `${DEFS}
<g filter="url(#glow-teal)">
  <rect x="20" y="18" width="24" height="22" rx="6" fill="url(#g-teal)"/>
  <rect x="22" y="14" width="5" height="8" rx="2.5" fill="#81ecec"/>
  <rect x="28" y="12" width="5" height="10" rx="2.5" fill="#81ecec"/>
  <rect x="34" y="14" width="5" height="8" rx="2.5" fill="#81ecec"/>
  <rect x="40" y="18" width="4" height="6" rx="2" fill="#81ecec"/>
  <circle cx="38" cy="42" r="5" fill="#00cec9"/>
  <rect x="22" y="40" width="16" height="10" rx="4" fill="url(#g-teal)"/>
</g>
<circle cx="18" cy="14" r="2" fill="#81ecec" opacity="0.4"/>
<circle cx="46" cy="12" r="1.5" fill="#81ecec" opacity="0.3"/>
<circle cx="14" cy="30" r="1" fill="#81ecec" opacity="0.3"/>
`);

// pushup-10: Flexed bicep
icon('pushup-10', `${DEFS}
<g filter="url(#glow-blue)">
  <path d="M18 44 Q16 34 20 28 Q24 22 28 18 Q30 16 32 18 L34 22 Q32 28 34 32 Q36 36 44 36 Q48 36 48 40 Q48 44 44 46 Z" fill="url(#g-blue)"/>
  <ellipse cx="30" cy="24" rx="7" ry="5" fill="#74b9ff" opacity="0.5"/>
</g>
<circle cx="15" cy="18" r="1.5" fill="#74b9ff" opacity="0.4"/>
<circle cx="50" cy="28" r="2" fill="#74b9ff" opacity="0.3"/>
`);

// pushup-20: Fire
icon('pushup-20', `${DEFS}
<g filter="url(#glow-fire)">
  <path d="M32 8 Q38 18 36 26 Q42 20 40 30 Q46 26 42 38 Q44 34 40 44 Q38 50 32 54 Q26 50 24 44 Q20 34 22 38 Q18 26 24 30 Q22 20 28 26 Q26 18 32 8Z" fill="url(#g-fire)"/>
  <path d="M32 20 Q36 28 34 34 Q38 30 36 40 Q34 46 32 48 Q30 46 28 40 Q26 30 30 34 Q28 28 32 20Z" fill="#ffeaa7" opacity="0.7"/>
  <ellipse cx="32" cy="42" rx="4" ry="6" fill="#fff" opacity="0.3"/>
</g>
`);

// pushup-diamond: Diamond
icon('pushup-diamond', `${DEFS}
<g filter="url(#glow-teal)">
  <polygon points="32,6 52,24 32,56 12,24" fill="url(#g-diamond)" opacity="0.9"/>
  <polygon points="32,6 42,24 32,56" fill="#a29bfe" opacity="0.3"/>
  <polygon points="32,6 22,24 32,42" fill="#fff" opacity="0.15"/>
  <line x1="12" y1="24" x2="52" y2="24" stroke="#fff" stroke-width="0.5" opacity="0.4"/>
  <line x1="32" y1="6" x2="32" y2="56" stroke="#fff" stroke-width="0.5" opacity="0.2"/>
  <line x1="32" y1="6" x2="22" y2="24" stroke="#fff" stroke-width="0.5" opacity="0.3"/>
  <line x1="32" y1="6" x2="42" y2="24" stroke="#fff" stroke-width="0.5" opacity="0.3"/>
  <line x1="22" y1="24" x2="32" y2="56" stroke="#fff" stroke-width="0.5" opacity="0.2"/>
  <line x1="42" y1="24" x2="32" y2="56" stroke="#fff" stroke-width="0.5" opacity="0.2"/>
</g>
<circle cx="22" cy="14" r="1.5" fill="#81ecec" opacity="0.5"/>
<circle cx="44" cy="16" r="1" fill="#a29bfe" opacity="0.5"/>
<circle cx="16" cy="36" r="1" fill="#74b9ff" opacity="0.4"/>
<circle cx="48" cy="38" r="1.5" fill="#81ecec" opacity="0.4"/>
`);

// pushup-50: Trophy
icon('pushup-50', `${DEFS}
<g filter="url(#glow-gold)">
  <rect x="24" y="44" width="16" height="4" rx="1" fill="url(#g-gold-dark)"/>
  <rect x="20" y="48" width="24" height="4" rx="2" fill="url(#g-gold-dark)"/>
  <rect x="29" y="36" width="6" height="10" rx="1" fill="url(#g-gold)"/>
  <path d="M20 12 Q20 32 32 36 Q44 32 44 12Z" fill="url(#g-gold)"/>
  <path d="M20 12 Q14 12 14 20 Q14 26 20 26" fill="url(#g-gold-dark)"/>
  <path d="M44 12 Q50 12 50 20 Q50 26 44 26" fill="url(#g-gold-dark)"/>
  <path d="M26 16 Q26 28 32 32 Q32 28 32 16Z" fill="#fff" opacity="0.2"/>
</g>
<circle cx="32" cy="8" r="3" fill="url(#g-gold)" filter="url(#glow-gold)"/>
<circle cx="18" cy="8" r="1.5" fill="#ffeaa7" opacity="0.5"/>
<circle cx="46" cy="8" r="1.5" fill="#ffeaa7" opacity="0.5"/>
`);

// ========================
// BARS
// ========================

// bars-3: Person on bars
icon('bars-3', `${DEFS}
<rect x="12" y="8" width="4" height="48" rx="2" fill="url(#g-iron)" filter="url(#shadow)"/>
<rect x="48" y="8" width="4" height="48" rx="2" fill="url(#g-iron)" filter="url(#shadow)"/>
<g filter="url(#glow-teal)">
  <circle cx="32" cy="18" r="5" fill="url(#g-teal)"/>
  <rect x="28" y="23" width="8" height="14" rx="3" fill="url(#g-teal)"/>
  <line x1="28" y1="26" x2="16" y2="22" stroke="url(#g-teal)" stroke-width="3" stroke-linecap="round"/>
  <line x1="36" y1="26" x2="48" y2="22" stroke="url(#g-teal)" stroke-width="3" stroke-linecap="round"/>
  <line x1="30" y1="37" x2="26" y2="50" stroke="url(#g-teal)" stroke-width="3" stroke-linecap="round"/>
  <line x1="34" y1="37" x2="38" y2="50" stroke="url(#g-teal)" stroke-width="3" stroke-linecap="round"/>
</g>
`);

// bars-5: Strong arms on bars
icon('bars-5', `${DEFS}
<rect x="10" y="8" width="5" height="50" rx="2.5" fill="url(#g-silver)" filter="url(#shadow)"/>
<rect x="49" y="8" width="5" height="50" rx="2.5" fill="url(#g-silver)" filter="url(#shadow)"/>
<g filter="url(#glow-blue)">
  <circle cx="32" cy="16" r="5" fill="url(#g-blue)"/>
  <rect x="28" y="21" width="8" height="14" rx="3" fill="url(#g-blue)"/>
  <path d="M28 24 Q22 20 15 22" stroke="url(#g-blue)" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M36 24 Q42 20 49 22" stroke="url(#g-blue)" stroke-width="4" stroke-linecap="round" fill="none"/>
  <line x1="30" y1="35" x2="26" y2="48" stroke="url(#g-blue)" stroke-width="3" stroke-linecap="round"/>
  <line x1="34" y1="35" x2="38" y2="48" stroke="url(#g-blue)" stroke-width="3" stroke-linecap="round"/>
</g>
<text x="32" y="60" text-anchor="middle" font-size="8" font-weight="bold" fill="url(#g-blue)" opacity="0.6">x5</text>
`);

// bars-10: Electric bars
icon('bars-10', `${DEFS}
<rect x="10" y="8" width="5" height="50" rx="2.5" fill="url(#g-gold)" filter="url(#shadow)"/>
<rect x="49" y="8" width="5" height="50" rx="2.5" fill="url(#g-gold)" filter="url(#shadow)"/>
<g filter="url(#glow-gold)">
  <polygon points="30,18 24,30 28,30 22,44 34,28 30,28 36,18" fill="url(#g-bolt)"/>
  <polygon points="40,14 36,24 39,24 34,36 44,22 40,22 44,14" fill="url(#g-bolt)" opacity="0.6"/>
</g>
<circle cx="20" cy="20" r="1.5" fill="#ffeaa7" opacity="0.5"/>
<circle cx="48" cy="40" r="1" fill="#ffeaa7" opacity="0.4"/>
`);

// bars-hold: Zen hold
icon('bars-hold', `${DEFS}
<rect x="12" y="10" width="4" height="44" rx="2" fill="url(#g-iron)" filter="url(#shadow)"/>
<rect x="48" y="10" width="4" height="44" rx="2" fill="url(#g-iron)" filter="url(#shadow)"/>
<g filter="url(#glow-purple)">
  <circle cx="32" cy="20" r="5" fill="url(#g-purple)"/>
  <rect x="28" y="25" width="8" height="14" rx="3" fill="url(#g-purple)"/>
  <line x1="28" y1="28" x2="16" y2="24" stroke="url(#g-purple)" stroke-width="3" stroke-linecap="round"/>
  <line x1="36" y1="28" x2="48" y2="24" stroke="url(#g-purple)" stroke-width="3" stroke-linecap="round"/>
  <line x1="30" y1="39" x2="28" y2="50" stroke="url(#g-purple)" stroke-width="3" stroke-linecap="round"/>
  <line x1="34" y1="39" x2="36" y2="50" stroke="url(#g-purple)" stroke-width="3" stroke-linecap="round"/>
</g>
<circle cx="32" cy="32" r="14" fill="none" stroke="url(#g-purple)" stroke-width="1" opacity="0.25"/>
<circle cx="32" cy="32" r="20" fill="none" stroke="url(#g-purple)" stroke-width="0.5" opacity="0.15"/>
`);

// ========================
// ABS
// ========================

// abs-20: Core/abs
icon('abs-20', `${DEFS}
<g filter="url(#glow-fire)">
  <rect x="20" y="10" width="24" height="40" rx="8" fill="#e17055" opacity="0.3"/>
  <rect x="22" y="14" width="9" height="7" rx="2" fill="url(#g-fire)"/>
  <rect x="33" y="14" width="9" height="7" rx="2" fill="url(#g-fire)"/>
  <rect x="22" y="23" width="9" height="7" rx="2" fill="url(#g-fire)"/>
  <rect x="33" y="23" width="9" height="7" rx="2" fill="url(#g-fire)"/>
  <rect x="22" y="32" width="9" height="7" rx="2" fill="url(#g-fire)"/>
  <rect x="33" y="32" width="9" height="7" rx="2" fill="url(#g-fire)"/>
</g>
<rect x="31" y="12" width="2" height="30" rx="1" fill="#0f0f1a" opacity="0.3"/>
`);

// abs-plank30: Plank position
icon('abs-plank30', `${DEFS}
<g filter="url(#glow-teal)">
  <circle cx="14" cy="30" r="4" fill="url(#g-teal)"/>
  <line x1="18" y1="32" x2="46" y2="32" stroke="url(#g-teal)" stroke-width="5" stroke-linecap="round"/>
  <line x1="16" y1="36" x2="14" y2="46" stroke="url(#g-teal)" stroke-width="3" stroke-linecap="round"/>
  <line x1="44" y1="36" x2="46" y2="46" stroke="url(#g-teal)" stroke-width="3" stroke-linecap="round"/>
  <line x1="48" y1="36" x2="50" y2="46" stroke="url(#g-teal)" stroke-width="3" stroke-linecap="round"/>
</g>
<text x="34" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="url(#g-teal)" opacity="0.5">30s</text>
`);

// abs-plank60: Electric plank
icon('abs-plank60', `${DEFS}
<g filter="url(#glow-gold)">
  <circle cx="14" cy="30" r="4" fill="url(#g-bolt)"/>
  <line x1="18" y1="32" x2="46" y2="32" stroke="url(#g-bolt)" stroke-width="5" stroke-linecap="round"/>
  <line x1="16" y1="36" x2="14" y2="46" stroke="url(#g-bolt)" stroke-width="3" stroke-linecap="round"/>
  <line x1="44" y1="36" x2="46" y2="46" stroke="url(#g-bolt)" stroke-width="3" stroke-linecap="round"/>
  <line x1="48" y1="36" x2="50" y2="46" stroke="url(#g-bolt)" stroke-width="3" stroke-linecap="round"/>
</g>
<polygon points="30,12 26,22 29,22 25,30 34,20 30,20 34,12" fill="url(#g-bolt)" filter="url(#glow-gold)" opacity="0.7"/>
<text x="46" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="url(#g-bolt)" opacity="0.5">60s</text>
`);

// abs-legs: Leg raise
icon('abs-legs', `${DEFS}
<g filter="url(#glow-green)">
  <circle cx="20" cy="40" r="5" fill="url(#g-green)"/>
  <rect x="22" y="36" width="16" height="6" rx="3" fill="url(#g-green)"/>
  <line x1="36" y1="34" x2="48" y2="16" stroke="url(#g-green)" stroke-width="5" stroke-linecap="round"/>
  <line x1="38" y1="36" x2="52" y2="20" stroke="url(#g-green)" stroke-width="5" stroke-linecap="round"/>
  <line x1="20" y1="44" x2="18" y2="54" stroke="url(#g-green)" stroke-width="3" stroke-linecap="round"/>
</g>
<path d="M46 14 Q50 10 48 16" stroke="url(#g-green)" stroke-width="1.5" fill="none" opacity="0.5"/>
<path d="M50 18 Q54 14 52 20" stroke="url(#g-green)" stroke-width="1.5" fill="none" opacity="0.5"/>
`);

// abs-vup: V-sit
icon('abs-vup', `${DEFS}
<g filter="url(#glow-gold)">
  <circle cx="32" cy="22" r="5" fill="url(#g-gold)"/>
  <line x1="32" y1="27" x2="32" y2="40" stroke="url(#g-gold)" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="40" x2="18" y2="16" stroke="url(#g-gold)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="34" y1="40" x2="46" y2="16" stroke="url(#g-gold)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="30" y1="28" x2="18" y2="14" stroke="url(#g-gold)" stroke-width="3" stroke-linecap="round"/>
  <line x1="34" y1="28" x2="46" y2="14" stroke="url(#g-gold)" stroke-width="3" stroke-linecap="round"/>
</g>
<text x="32" y="56" text-anchor="middle" font-size="10" font-weight="bold" fill="url(#g-gold)" opacity="0.4">V</text>
`);

// ========================
// ACHIEVEMENTS
// ========================

// first-quest: Glowing star
icon('first-quest', `${DEFS}
<g filter="url(#glow-gold)">
  <polygon points="32,8 37,24 54,24 40,34 45,50 32,40 19,50 24,34 10,24 27,24" fill="url(#g-gold)"/>
  <polygon points="32,14 35,24 44,24 37,30 39,40 32,35 25,40 27,30 20,24 29,24" fill="#ffeaa7" opacity="0.5"/>
</g>
`);

// 5-quests: Star cluster
icon('5-quests', `${DEFS}
<g filter="url(#glow-gold)">
  <polygon points="32,4 35,14 46,14 37,20 40,30 32,24 24,30 27,20 18,14 29,14" fill="url(#g-gold)"/>
  <polygon points="16,28 18,34 24,34 19,38 21,44 16,40 11,44 13,38 8,34 14,34" fill="url(#g-gold)" opacity="0.7"/>
  <polygon points="48,28 50,34 56,34 51,38 53,44 48,40 43,44 45,38 40,34 46,34" fill="url(#g-gold)" opacity="0.7"/>
  <polygon points="20,46 22,50 26,50 23,53 24,57 20,55 16,57 17,53 14,50 18,50" fill="url(#g-gold)" opacity="0.5"/>
  <polygon points="44,46 46,50 50,50 47,53 48,57 44,55 40,57 41,53 38,50 42,50" fill="url(#g-gold)" opacity="0.5"/>
</g>
`);

// 10-quests: Intense fire
icon('10-quests', `${DEFS}
<g filter="url(#glow-fire)">
  <path d="M32 4 Q40 16 38 24 Q46 16 42 32 Q50 24 44 42 Q42 50 32 56 Q22 50 20 42 Q14 24 22 32 Q18 16 26 24 Q24 16 32 4Z" fill="url(#g-fire)"/>
  <path d="M32 18 Q38 28 36 34 Q40 28 38 42 Q36 48 32 50 Q28 48 26 42 Q24 28 28 34 Q26 28 32 18Z" fill="#ffeaa7" opacity="0.8"/>
  <ellipse cx="32" cy="44" rx="3" ry="5" fill="#fff" opacity="0.3"/>
</g>
`);

// all-quests: Crown
icon('all-quests', `${DEFS}
<g filter="url(#glow-gold)">
  <path d="M12 38 L16 16 L24 28 L32 12 L40 28 L48 16 L52 38Z" fill="url(#g-gold)"/>
  <rect x="12" y="38" width="40" height="8" rx="2" fill="url(#g-gold-dark)"/>
  <path d="M16 20 L22 28 L32 16 L42 28 L48 20 L46 36 L18 36Z" fill="#ffeaa7" opacity="0.3"/>
  <circle cx="16" cy="16" r="3" fill="url(#g-gold)"/>
  <circle cx="32" cy="12" r="3" fill="url(#g-gold)"/>
  <circle cx="48" cy="16" r="3" fill="url(#g-gold)"/>
  <circle cx="24" cy="42" r="2" fill="#e17055"/>
  <circle cx="32" cy="42" r="2" fill="#0984e3"/>
  <circle cx="40" cy="42" r="2" fill="#00b894"/>
</g>
`);

// 100-pts: Coin bag
icon('100-pts', `${DEFS}
<g filter="url(#glow-gold)">
  <ellipse cx="32" cy="42" rx="16" ry="14" fill="url(#g-gold-dark)"/>
  <path d="M22 30 Q24 22 32 22 Q40 22 42 30" fill="url(#g-gold-dark)"/>
  <rect x="26" y="26" width="12" height="4" rx="2" fill="url(#g-gold)"/>
  <ellipse cx="32" cy="40" rx="10" ry="8" fill="url(#g-gold)" opacity="0.4"/>
</g>
<g filter="url(#glow-gold)">
  <circle cx="22" cy="16" r="5" fill="url(#g-gold)" stroke="#f9ca24" stroke-width="1"/>
  <text x="22" y="19" text-anchor="middle" font-size="7" font-weight="bold" fill="#e17055">$</text>
  <circle cx="42" cy="14" r="4" fill="url(#g-gold)" stroke="#f9ca24" stroke-width="1"/>
  <circle cx="36" cy="10" r="3.5" fill="url(#g-gold)" stroke="#f9ca24" stroke-width="1"/>
</g>
`);

// 500-pts: Diamond
icon('500-pts', `${DEFS}
<g filter="url(#glow-teal)">
  <polygon points="32,6 54,22 32,58 10,22" fill="url(#g-diamond)"/>
  <polygon points="32,6 43,22 32,58" fill="#a29bfe" opacity="0.25"/>
  <polygon points="32,6 21,22 32,46" fill="#fff" opacity="0.12"/>
  <line x1="10" y1="22" x2="54" y2="22" stroke="#fff" stroke-width="0.8" opacity="0.3"/>
</g>
<circle cx="20" cy="12" r="1.5" fill="#81ecec" opacity="0.6"/>
<circle cx="46" cy="14" r="1" fill="#a29bfe" opacity="0.5"/>
`);

// 1000-pts: Grand trophy
icon('1000-pts', `${DEFS}
<g filter="url(#glow-gold)">
  <rect x="26" y="44" width="12" height="5" rx="1" fill="url(#g-gold-dark)"/>
  <rect x="22" y="49" width="20" height="5" rx="2" fill="url(#g-gold-dark)"/>
  <rect x="29" y="36" width="6" height="10" rx="1" fill="url(#g-gold)"/>
  <path d="M18 10 Q18 32 32 38 Q46 32 46 10Z" fill="url(#g-gold)"/>
  <path d="M18 10 Q12 10 12 18 Q12 24 18 24" fill="url(#g-gold-dark)"/>
  <path d="M46 10 Q52 10 52 18 Q52 24 46 24" fill="url(#g-gold-dark)"/>
  <path d="M24 14 Q24 28 32 34 Q32 28 32 14Z" fill="#fff" opacity="0.15"/>
</g>
<polygon points="32,2 34,7 38,7 35,10 36,14 32,12 28,14 29,10 26,7 30,7" fill="url(#g-gold)" filter="url(#glow-gold)"/>
<polygon points="18,4 19,6 22,6 20,8 21,10 18,9 15,10 16,8 14,6 17,6" fill="#ffeaa7" opacity="0.5"/>
<polygon points="46,4 47,6 50,6 48,8 49,10 46,9 43,10 44,8 42,6 45,6" fill="#ffeaa7" opacity="0.5"/>
`);

// streak-3: Calendar fire
icon('streak-3', `${DEFS}
<g filter="url(#shadow)">
  <rect x="12" y="12" width="40" height="40" rx="6" fill="#1e2444"/>
  <rect x="12" y="12" width="40" height="12" rx="6" fill="url(#g-fire)" opacity="0.8"/>
  <rect x="12" y="18" width="40" height="6" fill="url(#g-fire)" opacity="0.8"/>
</g>
<g fill="url(#g-fire)" filter="url(#glow-fire)">
  <circle cx="22" cy="36" r="4"/>
  <circle cx="32" cy="36" r="4"/>
  <circle cx="42" cy="36" r="4"/>
</g>
<text x="22" y="39" text-anchor="middle" font-size="6" font-weight="bold" fill="#fff">1</text>
<text x="32" y="39" text-anchor="middle" font-size="6" font-weight="bold" fill="#fff">2</text>
<text x="42" y="39" text-anchor="middle" font-size="6" font-weight="bold" fill="#fff">3</text>
`);

// streak-7: Full week
icon('streak-7', `${DEFS}
<g filter="url(#shadow)">
  <rect x="8" y="10" width="48" height="44" rx="6" fill="#1e2444"/>
  <rect x="8" y="10" width="48" height="12" rx="6" fill="url(#g-gold)" opacity="0.8"/>
  <rect x="8" y="16" width="48" height="6" fill="url(#g-gold)" opacity="0.8"/>
</g>
<g fill="url(#g-gold)" filter="url(#glow-gold)">
  <circle cx="18" cy="32" r="3"/>
  <circle cx="28" cy="32" r="3"/>
  <circle cx="38" cy="32" r="3"/>
  <circle cx="48" cy="32" r="3"/>
  <circle cx="18" cy="44" r="3"/>
  <circle cx="28" cy="44" r="3"/>
  <circle cx="38" cy="44" r="3"/>
</g>
<g fill="#fff" font-size="4.5" text-anchor="middle" font-weight="bold">
  <text x="18" y="34">1</text><text x="28" y="34">2</text><text x="38" y="34">3</text><text x="48" y="34">4</text>
  <text x="18" y="46">5</text><text x="28" y="46">6</text><text x="38" y="46">7</text>
</g>
`);

// pullup-master: Gold bar with crown
icon('pullup-master', `${DEFS}
<rect x="8" y="22" width="48" height="5" rx="2.5" fill="url(#g-gold)" filter="url(#glow-gold)"/>
<rect x="10" y="17" width="5" height="14" rx="2" fill="url(#g-gold-dark)"/>
<rect x="49" y="17" width="5" height="14" rx="2" fill="url(#g-gold-dark)"/>
<g filter="url(#glow-gold)">
  <path d="M22 48 L26 36 L30 42 L34 34 L38 42 L42 36 L46 48Z" fill="url(#g-gold)"/>
  <rect x="22" y="48" width="24" height="4" rx="1" fill="url(#g-gold-dark)"/>
</g>
`);

// pushup-master: Gold fist
icon('pushup-master', `${DEFS}
<g filter="url(#glow-gold)">
  <rect x="20" y="20" width="24" height="22" rx="6" fill="url(#g-gold)"/>
  <rect x="22" y="16" width="5" height="8" rx="2.5" fill="#ffeaa7"/>
  <rect x="28" y="14" width="5" height="10" rx="2.5" fill="#ffeaa7"/>
  <rect x="34" y="16" width="5" height="8" rx="2.5" fill="#ffeaa7"/>
  <rect x="40" y="20" width="4" height="6" rx="2" fill="#ffeaa7"/>
  <rect x="22" y="42" width="16" height="8" rx="4" fill="url(#g-gold)"/>
</g>
<path d="M24 8 L27 2 L30 8 L33 4 L36 8 L39 2 L42 8" stroke="url(#g-gold)" stroke-width="1.5" fill="none" filter="url(#glow-gold)" opacity="0.6"/>
`);

// abs-master: Iron shield abs
icon('abs-master', `${DEFS}
<g filter="url(#glow-fire)">
  <path d="M32 6 Q48 10 50 28 Q50 48 32 58 Q14 48 14 28 Q16 10 32 6Z" fill="url(#g-iron)"/>
  <path d="M32 10 Q44 14 46 28 Q46 44 32 52 Q18 44 18 28 Q20 14 32 10Z" fill="#2d3436"/>
  <rect x="22" y="16" width="8" height="6" rx="1.5" fill="url(#g-fire)"/>
  <rect x="34" y="16" width="8" height="6" rx="1.5" fill="url(#g-fire)"/>
  <rect x="22" y="24" width="8" height="6" rx="1.5" fill="url(#g-fire)"/>
  <rect x="34" y="24" width="8" height="6" rx="1.5" fill="url(#g-fire)"/>
  <rect x="22" y="32" width="8" height="6" rx="1.5" fill="url(#g-fire)"/>
  <rect x="34" y="32" width="8" height="6" rx="1.5" fill="url(#g-fire)"/>
  <rect x="31" y="14" width="2" height="26" rx="1" fill="#2d3436" opacity="0.5"/>
</g>
`);

// Export
window.QUEST_ICONS = ICONS;
