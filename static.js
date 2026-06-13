const applyColorway = (cw, el) => {
    const svg = el.querySelector('.sneaker-svg') || el;
    [['-upper-color', cw.upper],['-panel-color', cw.sole],['-toe-color', cw.upper],['-accent-color', cw.accent],['-lace-color', cw.lace],['-midsole-color', cw.tongue]
    ].forEach(([p, v]) => svg.style.setProperty(p, v||''));
};
const selectColorway = idx => {
    colorwayTabs.querySelectorAll('.cw-tab').forEach((t, i) => {
        t.classList.toggle('active', i === idx);
        applyColorway(currentColorways[idx], sneakerStage);
        colorwayInfo.innerHTML = [['Upper', currentColorways[idx].upper],['Sole', currentColorways[idx].sole],['Accent', currentColorways[idx].accent],['Lace', currentColorways[idx].lace],['Tongue', currentColorways[idx].tongue]]
        .map(([l, c]) => `<div class="cw-color-item"><div class="cw-dot" style="background:${c}"></div>${l}: <strong style="color:var(--text)">${c}</strong></div>`).join('');
    }};
    const buildColorwayTabs = cws => {
        colorwayTabs.innerHTML = '';
        cws.forEach((cw, i) => {
            const btn = document.createElement('button');
            btn.className = 'cw-tab' + (i == 0 ? ' active' : '');
            btn.innerHTML = `<span class="cw-swatch" style="background:${cw.upper}"></span><span class="cw-swatch" style="background:${cw.accent}"></span>${esc(cw.name)}`;
            btn.addEventListener('click', () => selectColorway(i));
            colorwayTabs.appendChild(btn);
        });
    };
if (currentColorways.length) { buildColorwayTabs(currentColorways); selectColorway(0); }