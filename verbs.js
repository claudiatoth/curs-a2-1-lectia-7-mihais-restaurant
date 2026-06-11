// ============================================
// VERB-KONJUGATION - Mihais Restaurant (A2.1 · Lecția 7)
// 6 verbe care apar des cu comparația: sein · essen · trinken · fahren · finden · machen
// ============================================

const verbsData = [
    {
        inf: 'sein', ro: 'a fi (X ist ...-er als ...)', typ: 'neregulat', aux: 'sein', part: 'gewesen',
        praes: [
            ['ich','bin','sunt'],['du','bist','ești'],['er/sie/es','ist','este'],
            ['wir','sind','suntem'],['ihr','seid','sunteți'],['sie/Sie','sind','sunt / sunteți']
        ],
        praet: [
            ['ich','war','eram'],['du','warst','erai'],['er/sie/es','war','era'],
            ['wir','waren','eram'],['ihr','wart','erați'],['sie/Sie','waren','erau']
        ],
        perf: [
            ['ich','bin gewesen','am fost'],['du','bist gewesen','ai fost'],['er/sie/es','ist gewesen','a fost'],
            ['wir','sind gewesen','am fost'],['ihr','seid gewesen','ați fost'],['sie/Sie','sind gewesen','au fost']
        ],
        note: '🧩 Verbul comparației de bază: X <strong>ist</strong> + comparativ + als / X <strong>ist am</strong> + superlativ. Andreea ist jünger <strong>als</strong> Mihai. Mihais Lasagne ist <strong>am besten</strong>.'
    },
    {
        inf: 'essen', ro: 'a mânca (lieber / am liebsten)', typ: 'tare (neregulat)', aux: 'haben', part: 'gegessen',
        praes: [
            ['ich','esse','mănânc'],['du','isst','mănânci'],['er/sie/es','isst','mănâncă'],
            ['wir','essen','mâncăm'],['ihr','esst','mâncați'],['sie/Sie','essen','mănâncă / mâncați']
        ],
        praet: [
            ['ich','aß','mâncam'],['du','aßt','mâncai'],['er/sie/es','aß','mânca'],
            ['wir','aßen','mâncam'],['ihr','aßt','mâncați'],['sie/Sie','aßen','mâncau']
        ],
        perf: [
            ['ich','habe gegessen','am mâncat'],['du','hast gegessen','ai mâncat'],['er/sie/es','hat gegessen','a mâncat'],
            ['wir','haben gegessen','am mâncat'],['ihr','habt gegessen','ați mâncat'],['sie/Sie','haben gegessen','au mâncat']
        ],
        note: '🚨 TARE (e→i: du isst, er isst). Foarte folosit cu preferința: Ich esse <strong>lieber</strong> Pasta als Pizza. <strong>Am liebsten</strong> esse ich Lasagne.'
    },
    {
        inf: 'trinken', ro: 'a bea (lieber / am liebsten)', typ: 'tare (neregulat)', aux: 'haben', part: 'getrunken',
        praes: [
            ['ich','trinke','beau'],['du','trinkst','bei'],['er/sie/es','trinkt','bea'],
            ['wir','trinken','bem'],['ihr','trinkt','beți'],['sie/Sie','trinken','beau / beți']
        ],
        praet: [
            ['ich','trank','beam'],['du','trankst','beai'],['er/sie/es','trank','bea'],
            ['wir','tranken','beam'],['ihr','trankt','beați'],['sie/Sie','tranken','beau']
        ],
        perf: [
            ['ich','habe getrunken','am băut'],['du','hast getrunken','ai băut'],['er/sie/es','hat getrunken','a băut'],
            ['wir','haben getrunken','am băut'],['ihr','habt getrunken','ați băut'],['sie/Sie','haben getrunken','au băut']
        ],
        note: '🚨 TARE (i→a la Präteritum: trank). Ich trinke <strong>lieber</strong> Tee <strong>als</strong> Kaffee. Am liebsten trinke ich Wasser.'
    },
    {
        inf: 'fahren', ro: 'a merge (cu vehicul) — am schnellsten', typ: 'tare (neregulat)', aux: 'sein', part: 'gefahren',
        praes: [
            ['ich','fahre','merg'],['du','fährst','mergi'],['er/sie/es','fährt','merge'],
            ['wir','fahren','mergem'],['ihr','fahrt','mergeți'],['sie/Sie','fahren','merg / mergeți']
        ],
        praet: [
            ['ich','fuhr','mergeam'],['du','fuhrst','mergeai'],['er/sie/es','fuhr','mergea'],
            ['wir','fuhren','mergeam'],['ihr','fuhrt','mergeați'],['sie/Sie','fuhren','mergeau']
        ],
        perf: [
            ['ich','bin gefahren','am mers'],['du','bist gefahren','ai mers'],['er/sie/es','ist gefahren','a mers'],
            ['wir','sind gefahren','am mers'],['ihr','seid gefahren','ați mers'],['sie/Sie','sind gefahren','au mers']
        ],
        note: '🚨 TARE (a→ä: du fährst, er fährt) + Perfekt cu <strong>SEIN</strong> (mișcare). Das rote Auto fährt <strong>am schnellsten</strong> (cel mai repede).'
    },
    {
        inf: 'finden', ro: 'a găsi / a crede (Ich finde ... am ...-sten)', typ: 'tare (neregulat)', aux: 'haben', part: 'gefunden',
        praes: [
            ['ich','finde','găsesc / cred'],['du','findest','găsești'],['er/sie/es','findet','găsește'],
            ['wir','finden','găsim'],['ihr','findet','găsiți'],['sie/Sie','finden','găsesc / găsiți']
        ],
        praet: [
            ['ich','fand','găseam'],['du','fandst','găseai'],['er/sie/es','fand','găsea'],
            ['wir','fanden','găseam'],['ihr','fandet','găseați'],['sie/Sie','fanden','găseau']
        ],
        perf: [
            ['ich','habe gefunden','am găsit'],['du','hast gefunden','ai găsit'],['er/sie/es','hat gefunden','a găsit'],
            ['wir','haben gefunden','am găsit'],['ihr','habt gefunden','ați găsit'],['sie/Sie','haben gefunden','au găsit']
        ],
        note: '🧩 Pentru OPINII: Ich finde + Akkusativ + am ...-sten. Ich finde dieses Buch <strong>am interessantesten</strong> (= cred că e cea mai interesantă).'
    },
    {
        inf: 'machen', ro: 'a face (mehr / am meisten)', typ: 'regulat', aux: 'haben', part: 'gemacht',
        praes: [
            ['ich','mache','fac'],['du','machst','faci'],['er/sie/es','macht','face'],
            ['wir','machen','facem'],['ihr','macht','faceți'],['sie/Sie','machen','fac / faceți']
        ],
        praet: [
            ['ich','machte','făceam'],['du','machtest','făceai'],['er/sie/es','machte','făcea'],
            ['wir','machten','făceam'],['ihr','machtet','făceați'],['sie/Sie','machten','făceau']
        ],
        perf: [
            ['ich','habe gemacht','am făcut'],['du','hast gemacht','ai făcut'],['er/sie/es','hat gemacht','a făcut'],
            ['wir','haben gemacht','am făcut'],['ihr','habt gemacht','ați făcut'],['sie/Sie','haben gemacht','au făcut']
        ],
        note: '🧩 Regulat. Cu mehr / am meisten: Ich mache <strong>mehr</strong> Sport <strong>als</strong> du. Unsere Freundin macht <strong>am meisten</strong> Sport.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#6b7280;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe-cheie</strong> care apar des cu comparația — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Observă cum fiecare se leagă de comparativ/superlativ (lieber, am liebsten, am schnellsten...).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Comparația trăiește în propoziții cu verbe! sein + als (Andreea ist jünger als Mihai), essen/trinken + lieber (Ich esse lieber Pasta), fahren + am schnellsten, finden + am interessantesten. Învață verbul ȘI structura de comparație împreună! 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă comparație:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
