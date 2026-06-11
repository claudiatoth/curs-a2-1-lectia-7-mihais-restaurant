// ============================================
// EXERCIȚII - Mihais Restaurant (A2.1 · Lecția 7)
// Claudia Toth · 5 exerciții cu rezolvări complete
// Komparativ + Superlativ + so...wie / als
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        // ü→u, ö→o, ä→a (vocală simplă, NU ue/oe/ae): accept-urile sunt scrise fără umlaut
        // și astfel acceptăm și tastarea pe mobil fără umlaut. NU schimba în ue/oe/ae fără a rescrie accept-urile!
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: Komparativ — formează comparativul (12 itemi)
// ============================================
const ex1Data = [
    { id: 'a', prompt: 'klein → ____', hint: 'mai mic (regulat +er)', correct: 'kleiner', accept: ['kleiner'] },
    { id: 'b', prompt: 'schnell → ____', hint: 'mai repede (regulat +er)', correct: 'schneller', accept: ['schneller'] },
    { id: 'c', prompt: 'billig → ____', hint: 'mai ieftin (regulat +er)', correct: 'billiger', accept: ['billiger'] },
    { id: 'd', prompt: 'alt → ____', hint: 'mai bătrân (Umlaut a→ä)', correct: 'älter', accept: ['älter'] },
    { id: 'e', prompt: 'jung → ____', hint: 'mai tânăr (Umlaut u→ü)', correct: 'jünger', accept: ['jünger'] },
    { id: 'f', prompt: 'groß → ____', hint: 'mai mare (Umlaut o→ö)', correct: 'größer', accept: ['größer'] },
    { id: 'g', prompt: 'lang → ____', hint: 'mai lung (Umlaut a→ä)', correct: 'länger', accept: ['länger'] },
    { id: 'h', prompt: 'teuer → ____', hint: 'mai scump (pierde -e-: NU teuerer)', correct: 'teurer', accept: ['teurer'] },
    { id: 'i', prompt: 'gut → ____', hint: 'mai bun (NEREGULAT)', correct: 'besser', accept: ['besser'] },
    { id: 'j', prompt: 'viel → ____', hint: 'mai mult (NEREGULAT)', correct: 'mehr', accept: ['mehr'] },
    { id: 'k', prompt: 'gern → ____', hint: 'mai degrabă (NEREGULAT)', correct: 'lieber', accept: ['lieber'] },
    { id: 'l', prompt: 'hoch → ____', hint: 'mai înalt (NEREGULAT)', correct: 'höher', accept: ['höher'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Scrie comparativul (forma cu -er).</strong><br>
        <em>Atenție:</em> Umlaut la adjective scurte (alt → älter) · teuer pierde un -e- (teurer) · 4 neregulate (gut→besser, viel→mehr, gern→lieber, hoch→höher).
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#6b7280; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="comparativ...">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: wie sau als? — egalitate vs comparativ (10 itemi)
// ============================================
const ex2Data = [
    { id: 'a', text: 'Anna ist größer ____ Ben.', a: 'wie', b: 'als', correct: 'als', expl: 'Comparativ (größer) → als (= decât).' },
    { id: 'b', text: 'Ich bin so alt ____ du.', a: 'wie', b: 'als', correct: 'wie', expl: 'Egalitate (so alt) → wie (= ca).' },
    { id: 'c', text: 'Die Pizza ist teurer ____ der Salat.', a: 'wie', b: 'als', correct: 'als', expl: 'Comparativ (teurer) → als.' },
    { id: 'd', text: 'Der Hund ist so schnell ____ die Katze.', a: 'wie', b: 'als', correct: 'wie', expl: 'Egalitate (so schnell) → wie.' },
    { id: 'e', text: 'Mein Bruder ist jünger ____ ich.', a: 'wie', b: 'als', correct: 'als', expl: 'Comparativ (jünger) → als.' },
    { id: 'f', text: 'Das Cola ist nicht so kalt ____ das Wasser.', a: 'wie', b: 'als', correct: 'wie', expl: 'Egalitate negativă (nicht so kalt) → wie.' },
    { id: 'g', text: 'Lasagne schmeckt besser ____ Pizza.', a: 'wie', b: 'als', correct: 'als', expl: 'Comparativ neregulat (besser) → als.' },
    { id: 'h', text: 'Die Suppe ist so teuer ____ der Salat.', a: 'wie', b: 'als', correct: 'wie', expl: 'Egalitate (so teuer) → wie.' },
    { id: 'i', text: 'Berlin ist größer ____ Potsdam.', a: 'wie', b: 'als', correct: 'als', expl: 'Comparativ (größer) → als.' },
    { id: 'j', text: 'Ich mache mehr Sport ____ du.', a: 'wie', b: 'als', correct: 'als', expl: 'Comparativ (mehr) → als.' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🅰️🅳 Alege: wie sau als?</strong><br>
        <em>Regula:</em> comparativ (-er) + <strong>als</strong> (= decât) · so + adjectiv + <strong>wie</strong> (= ca, egalitate).
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="margin-right:14px;"><input type="radio" name="ex2-${it.id}" value="${it.a}"> ${it.a}</label>
                <label><input type="radio" name="ex2-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex2-${it.id}"]:checked`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct} — ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Superlativ — formează am ...-sten (12 itemi)
// ============================================
const ex3Data = [
    { id: 'a', prompt: 'klein → am ____', hint: 'cel mai mic', correct: 'am kleinsten', accept: ['am kleinsten', 'kleinsten'] },
    { id: 'b', prompt: 'schnell → am ____', hint: 'cel mai repede', correct: 'am schnellsten', accept: ['am schnellsten', 'schnellsten'] },
    { id: 'c', prompt: 'billig → am ____', hint: 'cel mai ieftin', correct: 'am billigsten', accept: ['am billigsten', 'billigsten'] },
    { id: 'd', prompt: 'alt → am ____', hint: 'cel mai bătrân (+e după -t)', correct: 'am ältesten', accept: ['am ältesten', 'ältesten'] },
    { id: 'e', prompt: 'groß → am ____', hint: 'cel mai mare (Umlaut)', correct: 'am größten', accept: ['am größten', 'größten'] },
    { id: 'f', prompt: 'lang → am ____', hint: 'cel mai lung (Umlaut)', correct: 'am längsten', accept: ['am längsten', 'längsten'] },
    { id: 'g', prompt: 'interessant → am ____', hint: 'cel mai interesant (+e după -t)', correct: 'am interessantesten', accept: ['am interessantesten', 'interessantesten'] },
    { id: 'h', prompt: 'teuer → am ____', hint: 'cel mai scump', correct: 'am teuersten', accept: ['am teuersten', 'teuersten'] },
    { id: 'i', prompt: 'gut → am ____', hint: 'cel mai bun (NEREGULAT)', correct: 'am besten', accept: ['am besten', 'besten'] },
    { id: 'j', prompt: 'viel → am ____', hint: 'cel mai mult (NEREGULAT)', correct: 'am meisten', accept: ['am meisten', 'meisten'] },
    { id: 'k', prompt: 'gern → am ____', hint: 'cel mai mult / preferat (NEREGULAT)', correct: 'am liebsten', accept: ['am liebsten', 'liebsten'] },
    { id: 'l', prompt: 'heiß → am ____', hint: 'cel mai fierbinte (+e după -ß)', correct: 'am heißesten', accept: ['am heißesten', 'heißesten'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🥇 Scrie superlativul (forma am ...-sten).</strong><br>
        <em>Atenție:</em> după -t/-d/-s/-ß/-z se adaugă -e- (am ältesten, am heißesten) · Umlaut rămâne (am größten) · neregulate (am besten, am meisten, am liebsten).
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#6b7280; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="...sten">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Completează forma corectă în context (10 itemi)
// ============================================
const ex4Data = [
    { id: 'a', prompt: 'Meine Schwester ist ____ als ich.', hint: 'jung + als → comparativ', correct: 'jünger', accept: ['jünger'] },
    { id: 'b', prompt: 'Von allen Filmen ist die Komödie am ____.', hint: 'gut → superlativ neregulat', correct: 'besten', accept: ['besten', 'am besten'] },
    { id: 'c', prompt: 'Der Hund ist so ____ wie die Katze.', hint: 'schnell + so...wie → POZITIV (neschimbat)', correct: 'schnell', accept: ['schnell'] },
    { id: 'd', prompt: 'Die Trüffelpizza ist am ____.', hint: 'teuer → superlativ', correct: 'teuersten', accept: ['teuersten', 'am teuersten'] },
    { id: 'e', prompt: 'Mein Bruder ist ____ als ich.', hint: 'alt + als → comparativ', correct: 'älter', accept: ['älter'] },
    { id: 'f', prompt: 'Diese Aufgabe ist am ____.', hint: 'schwierig → superlativ', correct: 'schwierigsten', accept: ['schwierigsten', 'am schwierigsten'] },
    { id: 'g', prompt: 'Ich esse ____ Pasta als Pizza.', hint: 'gern + als → comparativ neregulat', correct: 'lieber', accept: ['lieber'] },
    { id: 'h', prompt: 'Berlin ist ____ als Potsdam.', hint: 'groß + als → comparativ', correct: 'größer', accept: ['größer'] },
    { id: 'i', prompt: 'Die Suppe ist so ____ wie der Salat.', hint: 'teuer + so...wie → POZITIV (neschimbat)', correct: 'teuer', accept: ['teuer'] },
    { id: 'j', prompt: 'Wer arbeitet im Restaurant am ____?', hint: 'fleißig → superlativ', correct: 'fleißigsten', accept: ['fleißigsten', 'am fleißigsten'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🧩 Completează cu forma corectă (comparativ, superlativ sau pozitiv).</strong><br>
        <em>Indiciu:</em> <strong>als</strong> → comparativ (-er) · <strong>am ...</strong> → superlativ (-sten) · <strong>so ... wie</strong> → pozitiv (neschimbat!).
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#6b7280; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex4-${it.id}" placeholder="forma corectă...">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Pizza e mai gustoasă decât salata.', correct: 'Pizza ist leckerer als Salat.', accept: ['pizza ist leckerer als salat', 'die pizza ist leckerer als der salat'] },
    { id: 'b', ro: 'Lasagna e cea mai bună.', correct: 'Die Lasagne ist am besten.', accept: ['die lasagne ist am besten', 'lasagne ist am besten'] },
    { id: 'c', ro: 'Fratele meu e mai mare (în vârstă) decât mine.', correct: 'Mein Bruder ist älter als ich.', accept: ['mein bruder ist älter als ich'] },
    { id: 'd', ro: 'Sunt la fel de înalt ca tine.', correct: 'Ich bin so groß wie du.', accept: ['ich bin so groß wie du'] },
    { id: 'e', ro: 'Cafeaua e mai ieftină decât ceaiul.', correct: 'Der Kaffee ist billiger als der Tee.', accept: ['der kaffee ist billiger als der tee', 'kaffee ist billiger als tee', 'der kaffee ist günstiger als der tee'] },
    { id: 'f', ro: 'Cine lucrează cel mai harnic?', correct: 'Wer arbeitet am fleißigsten?', accept: ['wer arbeitet am fleißigsten'] },
    { id: 'g', ro: 'Mașina roșie merge cel mai repede.', correct: 'Das rote Auto fährt am schnellsten.', accept: ['das rote auto fährt am schnellsten'] },
    { id: 'h', ro: 'Prefer ceaiul (mai degrabă decât cafeaua).', correct: 'Ich trinke lieber Tee.', accept: ['ich trinke lieber tee', 'ich mag lieber tee', 'ich trinke lieber tee als kaffee'] },
    { id: 'i', ro: 'Berlin e mai mare decât Potsdam.', correct: 'Berlin ist größer als Potsdam.', accept: ['berlin ist größer als potsdam'] },
    { id: 'j', ro: 'Cel mai mult îmi place să mănânc pizza.', correct: 'Am liebsten esse ich Pizza.', accept: ['am liebsten esse ich pizza', 'ich esse am liebsten pizza'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Traduce în germană. Folosește comparativul, superlativul sau so...wie după caz.</strong>
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie traducerea în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
