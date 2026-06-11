// ============================================
// TEORIE - Mihais Restaurant (A2.1 · Lecția 7)
// Claudia Toth · Annettes Deutschkurs
// Sursă DF: INT247 (Superlativ) + INT248 (Komparativ + so...wie/als) — nucleu
// Tematica: Komparativ und Superlativ (gradele de comparație ale adjectivelor)
// ============================================

const theoryHTML = `
    <!-- 0: Story -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🍕 1. Mihais Restaurant — povestea</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-restaurant-story.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele lecției</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · noul meniu</span></div>
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Gustă și compară</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Fotografă · Berlin</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Maistru · Oranienburg</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 „Welche Pizza schmeckt am besten?"</h4>
                <p>Mihai pregătește meniul nou pentru restaurantul lui din Potsdam. O cheamă pe Andreea să guste și să-l ajute să aleagă. Ei compară tot: care pizza e <em>mai gustoasă</em> (leckerer), care e <em>mai ieftină</em> (günstiger), care fel e <strong>cel mai bun</strong> (am besten). Pentru asta avem nevoie de cele <strong>3 trepte ale adjectivului</strong>: Positiv (lecker), Komparativ (leckerer) și Superlativ (am leckersten).</p>
            </div>

            <div class="theory-box">
                <h4>💬 Dialogul: Mihai + Andreea</h4>
                <p><strong style="color:#065f46;">Mihai:</strong> Probier mal! Welche Pizza schmeckt dir <strong>am besten</strong>?<br><span class="ro-translation">Gustă! Care pizza îți place cel mai mult?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Mmm, die Margherita ist <strong>lecker</strong>, aber die Salamipizza ist <strong>leckerer</strong>. Die Trüffelpizza ist <strong>am leckersten</strong>!<br><span class="ro-translation">Mmm, Margherita e gustoasă, dar pizza cu salam e mai gustoasă. Pizza cu trufe e cea mai gustoasă!</span></p>
                <p><strong style="color:#065f46;">Mihai:</strong> Und der Preis? Die Margherita ist <strong>günstiger als</strong> die Trüffelpizza.<br><span class="ro-translation">Și prețul? Margherita e mai ieftină decât pizza cu trufe.</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Stimmt. Aber für mich ist die Qualität <strong>wichtiger als</strong> der Preis!<br><span class="ro-translation">Așa e. Dar pentru mine calitatea e mai importantă decât prețul!</span></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Toată lecția e despre a COMPARA. 3 trepte: <strong>lecker</strong> (gustos) → <strong>leckerer</strong> (mai gustos) → <strong>am leckersten</strong> (cel mai gustos). Plus 2 cuvinte-cheie: <strong>als</strong> = decât (la comparativ) și <strong>wie</strong> = ca (la egalitate). Hai să le luăm pe rând! 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT — Trimite textul Claudiei ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    Compară 3 lucruri pe care le iubești (mâncăruri, orașe, anotimpuri...) folosind cel puțin <strong>3 propoziții la comparativ (-er als)</strong> și <strong>3 la superlativ (am ...-sten)</strong>. <strong>Min. 60 cuvinte.</strong> Îți răspund personal pe email. 🦋
                </p>
                <a href="https://forms.gle/kFP261BaPSsFUYJDA" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #6b7280; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: Komparativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🥈 2. Komparativ — mai... (-er + als)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-komparativ.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Rețeta: adjectiv + -er ... als</h4>
                <p>Pentru a spune că ceva e <strong>mai</strong> ... decât altceva, adaugi <strong>-er</strong> la adjectiv și folosești <strong>als</strong> (= decât):</p>
                <p style="text-align:center; font-size:1.05rem;">klein → <strong>kleiner</strong> · Anna ist <strong>kleiner als</strong> Ben.<br><span style="color:#6b7280; font-style:italic;">Anna e mai mică decât Ben.</span></p>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Comparativ regulat (+ -er)</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Positiv</th><th>Komparativ</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td>klein</td><td><strong>kleiner</strong></td><td>mai mic</td></tr>
                    <tr><td>schnell</td><td><strong>schneller</strong></td><td>mai repede</td></tr>
                    <tr><td>billig</td><td><strong>billiger</strong></td><td>mai ieftin</td></tr>
                    <tr><td>schön</td><td><strong>schöner</strong></td><td>mai frumos</td></tr>
                    <tr><td>interessant</td><td><strong>interessanter</strong></td><td>mai interesant</td></tr>
                    <tr><td>lecker</td><td><strong>leckerer</strong></td><td>mai gustos</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="border-left-color:#dc2626;">
                <h4>🚨 2 capcane importante</h4>
                <ul>
                    <li><strong>Umlaut</strong>: multe adjective scurte primesc Umlaut (a→ä, o→ö, u→ü): <strong>alt → älter</strong>, jung → jünger, groß → größer, lang → länger, warm → wärmer, kurz → kürzer.</li>
                    <li><strong>-el / -er pierd un „e"</strong>: te<strong>u</strong>er → te<strong>u</strong>rer (NU teuerer), dunkel → dunkler, teuer → teurer.</li>
                </ul>
            </div>

            <div class="example-box">
                <p class="de">Die Salamipizza ist <strong>teurer als</strong> die Margherita.</p>
                <p class="ro">Pizza cu salam e mai scumpă decât Margherita.</p>
            </div>
            <div class="example-box">
                <p class="de">Mein Bruder ist <strong>älter als</strong> ich.</p>
                <p class="ro">Fratele meu e mai mare (în vârstă) decât mine.</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Cuvântul-cheie la comparativ e <strong>als</strong> (= decât). NU folosi „wie" aici! „älter <strong>als</strong>" (mai bătrân DECÂT), nu „älter wie". Trucul Umlaut: dacă adjectivul are a/o/u și e scurt, probabil primește Umlaut la comparativ.</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Superlativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🥇 3. Superlativ — cel mai... (am ...-sten)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-superlativ.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Rețeta: am + adjectiv + -sten</h4>
                <p>Pentru „<strong>cel mai</strong> ..." folosești formula <strong>am ...-sten</strong>. Această formă nu se schimbă — merge mereu cu „am":</p>
                <p style="text-align:center; font-size:1.05rem;">schnell → <strong>am schnellsten</strong> · Das rote Auto fährt <strong>am schnellsten</strong>.<br><span style="color:#6b7280; font-style:italic;">Mașina roșie merge cel mai repede.</span></p>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Superlativ (am ...-sten)</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Positiv</th><th>Superlativ</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td>klein</td><td><strong>am kleinsten</strong></td><td>cel mai mic</td></tr>
                    <tr><td>schnell</td><td><strong>am schnellsten</strong></td><td>cel mai repede</td></tr>
                    <tr><td>billig</td><td><strong>am billigsten</strong></td><td>cel mai ieftin</td></tr>
                    <tr><td>lecker</td><td><strong>am leckersten</strong></td><td>cel mai gustos</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="border-left-color:#dc2626;">
                <h4>🚨 Capcana „+e": am ...-<u>e</u>sten</h4>
                <p>După <strong>-t, -d, -s, -ß, -z</strong> se adaugă un <strong>-e-</strong> de sprijin (ca să poți pronunța):</p>
                <ul>
                    <li>alt → <strong>am ältesten</strong> · kalt → am kältesten</li>
                    <li>interessant → <strong>am interessantesten</strong> · gesund → am gesündesten</li>
                    <li>heiß → <strong>am heißesten</strong> · kurz → am kürzesten</li>
                </ul>
                <p style="margin-top:6px;">Umlaut-ul rămâne și aici: groß → <strong>am größten</strong>, lang → am längsten, jung → am jüngsten.</p>
            </div>

            <div class="example-box">
                <p class="de">Von allen Gerichten ist die Lasagne <strong>am leckersten</strong>.</p>
                <p class="ro">Dintre toate felurile, lasagna e cea mai gustoasă.</p>
            </div>
            <div class="example-box">
                <p class="de">Wer arbeitet im Restaurant <strong>am fleißigsten</strong>? — Mihai!</p>
                <p class="ro">Cine lucrează cel mai harnic în restaurant? — Mihai!</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Superlativul are mereu <strong>am</strong> în față și <strong>-sten</strong> la coadă. Întrebarea tipică: <strong>Wer ist am ...-sten?</strong> (Cine e cel mai...?). Dacă adjectivul se termină în -t/-d/-s/-z, pui un -e- înainte de -sten: al<strong>t</strong> → am ält<strong>e</strong>sten.</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Neregulate + so...wie -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>⭐ 4. Forme neregulate + so...wie (egalitate)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-unregelmaessig-sowie.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 4 adjective neregulate — învață-le pe de rost!</h4>
                <p>Acestea NU urmează regula. Sunt foarte frecvente, deci merită memorate:</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Positiv</th><th>Komparativ</th><th>Superlativ</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>gut</strong></td><td><strong>besser</strong></td><td><strong>am besten</strong></td><td>bun / mai bun / cel mai bun</td></tr>
                    <tr><td><strong>viel</strong></td><td><strong>mehr</strong></td><td><strong>am meisten</strong></td><td>mult / mai mult / cel mai mult</td></tr>
                    <tr><td><strong>gern</strong></td><td><strong>lieber</strong></td><td><strong>am liebsten</strong></td><td>cu plăcere / mai degrabă / cel mai mult (preferat)</td></tr>
                    <tr><td><strong>hoch</strong></td><td><strong>höher</strong></td><td><strong>am höchsten</strong></td><td>înalt / mai înalt / cel mai înalt</td></tr>
                </tbody>
            </table>

            <div class="example-box">
                <p class="de">Ich esse gern Pizza, aber ich esse <strong>lieber</strong> Pasta. <strong>Am liebsten</strong> esse ich Lasagne.</p>
                <p class="ro">Îmi place să mănânc pizza, dar prefer pasta. Cel mai mult îmi place lasagna.</p>
            </div>

            <div class="theory-box" style="border-left-color:#047857; margin-top:14px;">
                <h4>🔑 so ... wie = la fel de ... ca (egalitate)</h4>
                <p>Când două lucruri sunt <strong>la fel</strong>, folosești <strong>so + adjectiv (positiv) + wie</strong>. Aici NU schimbi adjectivul și folosești <strong>wie</strong> (= ca), nu „als":</p>
                <ul>
                    <li>Ich bin <strong>so alt wie</strong> du. <span class="ro-translation">Am exact aceeași vârstă ca tine.</span></li>
                    <li>Der Espresso ist <strong>so teuer wie</strong> der Cappuccino. <span class="ro-translation">Espresso e la fel de scump ca cappuccino.</span></li>
                    <li>Negativ: Ben ist <strong>nicht so groß wie</strong> Tom. <span class="ro-translation">Ben nu e așa de înalt ca Tom.</span></li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>🚨 Nu confunda <strong>als</strong> și <strong>wie</strong>! <strong>als</strong> = DECÂT (diferență: größer ALS) · <strong>wie</strong> = CA (egalitate: so groß WIE). Și ține minte cele 4 neregulate ca pe o poezie: gut-besser-am besten, viel-mehr-am meisten, gern-lieber-am liebsten, hoch-höher-am höchsten.</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Recapitulare + vocabular -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📚 5. Recapitulare + vocabular Restaurant</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-vocabular.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Cele 3 trepte dintr-o privire</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Positiv</th><th>Komparativ (-er als)</th><th>Superlativ (am -sten)</th></tr>
                </thead>
                <tbody>
                    <tr><td>schnell</td><td>schneller</td><td>am schnellsten</td></tr>
                    <tr><td>alt (Umlaut)</td><td>älter</td><td>am ältesten</td></tr>
                    <tr><td>teuer (-e)</td><td>teurer</td><td>am teuersten</td></tr>
                    <tr><td>gut (neregulat)</td><td>besser</td><td>am besten</td></tr>
                    <tr><td>gern (neregulat)</td><td>lieber</td><td>am liebsten</td></tr>
                </tbody>
            </table>

            <div class="theory-box info-box" style="margin-top:14px;">
                <h4>🧭 Cele 3 structuri de comparație</h4>
                <ul>
                    <li><strong>so + positiv + wie</strong> = la fel de ... ca (egalitate)</li>
                    <li><strong>komparativ + als</strong> = mai ... decât (diferență)</li>
                    <li><strong>am + superlativ + sten</strong> = cel mai ... (vârful)</li>
                </ul>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Vocabular Restaurant (cu Sg + Pl)</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Singular DE — Singular RO</th><th>Plural DE — Plural RO</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>das Gericht</strong> — felul de mâncare</td><td><strong>die Gerichte</strong> — felurile</td></tr>
                    <tr><td><strong>die Speisekarte</strong> — meniul (lista)</td><td><strong>die Speisekarten</strong> — meniurile</td></tr>
                    <tr><td><strong>der Preis</strong> — prețul</td><td><strong>die Preise</strong> — prețurile</td></tr>
                    <tr><td><strong>der Gast</strong> — clientul / oaspetele</td><td><strong>die Gäste</strong> — clienții (Umlaut!)</td></tr>
                    <tr><td><strong>der Nachtisch</strong> — desertul</td><td><strong>die Nachtische</strong> — deserturile</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Acum poți compara orice: mâncăruri, prețuri, prieteni, orașe! Reține harta: <strong>wie</strong> pentru egal, <strong>als</strong> pentru diferit, <strong>am ...-sten</strong> pentru cel mai. Mergi în restaurantul lui Mihai și spune care fel e am besten! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
