// ============================================
// FLASHCARDS - Mihais Restaurant (A2.1 · Lecția 7)
// Claudia Toth · 32 carduri: triade Positiv→Komparativ→Superlativ + neregulate + propoziții
// REGULĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Concept (3) ===
    { de: "Komparativ + als", ro: "mai ... DECÂT (diferență): kleiner als = mai mic decât", audio: "audio/letters/konzept-komparativ.wav" },
    { de: "so + Positiv + wie", ro: "la fel de ... CA (egalitate): so groß wie = la fel de mare ca", audio: "audio/letters/konzept-gleichheit.wav" },
    { de: "am ...-sten", ro: "CEL MAI ... (superlativ): am besten = cel mai bine", audio: "audio/letters/konzept-superlativ.wav" },

    // === Triade regulate (8) ===
    { de: "klein → kleiner → am kleinsten", ro: "mic → mai mic → cel mai mic", audio: "audio/letters/triade-klein.wav" },
    { de: "schnell → schneller → am schnellsten", ro: "repede → mai repede → cel mai repede", audio: "audio/letters/triade-schnell.wav" },
    { de: "billig → billiger → am billigsten", ro: "ieftin → mai ieftin → cel mai ieftin", audio: "audio/letters/triade-billig.wav" },
    { de: "interessant → interessanter → am interessantesten", ro: "interesant → mai interesant → cel mai interesant", audio: "audio/letters/triade-interessant.wav" },
    { de: "lecker → leckerer → am leckersten", ro: "gustos → mai gustos → cel mai gustos", audio: "audio/letters/triade-lecker.wav" },
    { de: "freundlich → freundlicher → am freundlichsten", ro: "prietenos → mai prietenos → cel mai prietenos", audio: "audio/letters/triade-freundlich.wav" },
    { de: "teuer → teurer → am teuersten", ro: "scump → mai scump → cel mai scump (pierde -e- la comparativ)", audio: "audio/letters/triade-teuer.wav" },
    { de: "dunkel → dunkler → am dunkelsten", ro: "întunecat → mai întunecat → cel mai întunecat", audio: "audio/letters/triade-dunkel.wav" },

    // === Cu Umlaut (6) ===
    { de: "groß → größer → am größten", ro: "mare → mai mare → cel mai mare (Umlaut o→ö)", audio: "audio/letters/umlaut-gross.wav" },
    { de: "lang → länger → am längsten", ro: "lung → mai lung → cel mai lung (Umlaut a→ä)", audio: "audio/letters/umlaut-lang.wav" },
    { de: "kurz → kürzer → am kürzesten", ro: "scurt → mai scurt → cel mai scurt (Umlaut u→ü)", audio: "audio/letters/umlaut-kurz.wav" },
    { de: "alt → älter → am ältesten", ro: "bătrân → mai bătrân → cel mai bătrân (Umlaut a→ä)", audio: "audio/letters/umlaut-alt.wav" },
    { de: "jung → jünger → am jüngsten", ro: "tânăr → mai tânăr → cel mai tânăr (Umlaut u→ü)", audio: "audio/letters/umlaut-jung.wav" },
    { de: "warm → wärmer → am wärmsten", ro: "cald → mai cald → cel mai cald (Umlaut a→ä)", audio: "audio/letters/umlaut-warm.wav" },

    // === Neregulate (4) ===
    { de: "gut → besser → am besten", ro: "bun → mai bun → cel mai bun (NEREGULAT)", audio: "audio/letters/unregel-gut.wav" },
    { de: "viel → mehr → am meisten", ro: "mult → mai mult → cel mai mult (NEREGULAT)", audio: "audio/letters/unregel-viel.wav" },
    { de: "gern → lieber → am liebsten", ro: "cu plăcere → mai degrabă → cel mai mult (preferat)", audio: "audio/letters/unregel-gern.wav" },
    { de: "hoch → höher → am höchsten", ro: "înalt → mai înalt → cel mai înalt (NEREGULAT)", audio: "audio/letters/unregel-hoch.wav" },

    // === +e eufonic (2) ===
    { de: "laut → lauter → am lautesten", ro: "tare (zgomot) → mai tare → cel mai tare (+e după -t)", audio: "audio/letters/eufonic-laut.wav" },
    { de: "gesund → gesünder → am gesündesten", ro: "sănătos → mai sănătos → cel mai sănătos (Umlaut + e)", audio: "audio/letters/eufonic-gesund.wav" },

    // === Propoziții (9) ===
    { de: "Pizza schmeckt am besten.", ro: "Pizza e cea mai gustoasă (are cel mai bun gust).", audio: "audio/letters/satz-pizza-besten.wav" },
    { de: "Andreea ist jünger als Mihai.", ro: "Andreea e mai tânără decât Mihai.", audio: "audio/letters/satz-juenger.wav" },
    { de: "Der Espresso ist so teuer wie der Cappuccino.", ro: "Espresso e la fel de scump ca cappuccino.", audio: "audio/letters/satz-espresso.wav" },
    { de: "Wer arbeitet am fleißigsten?", ro: "Cine lucrează cel mai harnic?", audio: "audio/letters/satz-fleissigsten.wav" },
    { de: "Salat ist günstiger als Pizza.", ro: "Salata e mai ieftină decât pizza.", audio: "audio/letters/satz-guenstiger.wav" },
    { de: "Ich mag Tee lieber als Kaffee.", ro: "Prefer ceaiul cafelei (mai degrabă ceai).", audio: "audio/letters/satz-lieber.wav" },
    { de: "Das rote Auto fährt am schnellsten.", ro: "Mașina roșie merge cel mai repede.", audio: "audio/letters/satz-auto.wav" },
    { de: "Ich finde dieses Buch am interessantesten.", ro: "Găsesc cartea asta cea mai interesantă.", audio: "audio/letters/satz-buch.wav" },
    { de: "Mihais Lasagne schmeckt am besten!", ro: "Lasagna lui Mihai e cea mai gustoasă!", audio: "audio/letters/satz-lasagne.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
