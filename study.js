/* ==========================================
   MAX KIDS STUDY ZONE
========================================== */


/* =========================
   1 TO 100 COUNTING
========================= */

const countingGrid =
  document.getElementById("counting-grid");

const numberNames = [
  "",
  "एक","दो","तीन","चार","पाँच",
  "छह","सात","आठ","नौ","दस",
  "ग्यारह","बारह","तेरह","चौदह","पंद्रह",
  "सोलह","सत्रह","अठारह","उन्नीस","बीस",
  "इक्कीस","बाईस","तेईस","चौबीस","पच्चीस",
  "छब्बीस","सत्ताईस","अट्ठाईस","उनतीस","तीस",
  "इकतीस","बत्तीस","तैंतीस","चौंतीस","पैंतीस",
  "छत्तीस","सैंतीस","अड़तीस","उनतालीस","चालीस",
  "इकतालीस","बयालीस","तैंतालीस","चवालीस","पैंतालीस",
  "छियालीस","सैंतालीस","अड़तालीस","उनचास","पचास",
  "इक्यावन","बावन","तिरेपन","चौवन","पचपन",
  "छप्पन","सत्तावन","अट्ठावन","उनसठ","साठ",
  "इकसठ","बासठ","तिरसठ","चौंसठ","पैंसठ",
  "छियासठ","सड़सठ","अड़सठ","उनहत्तर","सत्तर",
  "इकहत्तर","बहत्तर","तिहत्तर","चौहत्तर","पचहत्तर",
  "छिहत्तर","सतहत्तर","अठहत्तर","उनासी","अस्सी",
  "इक्यासी","बयासी","तिरासी","चौरासी","पचासी",
  "छियासी","सत्तासी","अट्ठासी","नवासी","नब्बे",
  "इक्यानबे","बानबे","तिरानबे","चौरानबे","पंचानबे",
  "छियानबे","सत्तानबे","अट्ठानबे","निन्यानबे","सौ"
];

const pictures = [
  "🍎","🍎🍎","🍎🍎🍎","⭐","🌸",
  "🍓","🍊","⚽","🐟","🌈"
];

function getFingers(number){

  if(number <= 5){
    return "🖐️".slice(0,0) +
      ["","☝️","✌️","🤟","🖐️","🖐️"][number];
  }

  return "🖐️ + " + (number - 5);
}

if(countingGrid){

  for(let n = 1; n <= 100; n++){

    let visual = "";

    if(n <= 10){
      visual = pictures[n-1];
    }else if(n % 10 === 0){
      visual = "🔵";
    }else{
      visual = "⭐";
    }

    let fingers = "";

    if(n <= 5){
      fingers = getFingers(n);
    }else if(n === 10){
      fingers = "🖐️ 🖐️";
    }else{
      fingers = "👆";
    }

    countingGrid.innerHTML += `

      <div class="count-card">

        <div class="number">${n}</div>

        <div class="fingers">
          ${fingers}
        </div>

        <div class="pictures">
          ${visual}
        </div>

        <div class="hindi-number">
          ${numberNames[n]}
        </div>

      </div>

    `;

  }

}


/* =========================
   TABLES 1 TO 100
========================= */

const tablesGrid =
  document.getElementById("tables-grid");

if(tablesGrid){

  for(let number = 1; number <= 100; number++){

    let tableHTML = `
      <div class="table-card">

        <h3>Table ${number}</h3>
    `;

    for(let i = 1; i <= 10; i++){

      tableHTML += `
        <p>
          ${number} × ${i} = ${number * i}
        </p>
      `;

    }

    tableHTML += `</div>`;

    tablesGrid.innerHTML += tableHTML;

  }

}


/* =========================
   HINDI SWAR
========================= */

const swar = [
  ["अ","अनार 🍎"],
  ["आ","आम 🥭"],
  ["इ","इमली 🌿"],
  ["ई","ईख 🌱"],
  ["उ","उल्लू 🦉"],
  ["ऊ","ऊन 🧶"],
  ["ए","एड़ी 👣"],
  ["ऐ","ऐनक 👓"],
  ["ओ","ओखली 🥣"],
  ["औ","औरत 👩"],
  ["अं","अंगूर 🍇"],
  ["अः","दुःख"]
];

const swarGrid =
  document.getElementById("swar-grid");

if(swarGrid){

  swar.forEach(item => {

    swarGrid.innerHTML += `

      <div class="letter-card">

        <strong>${item[0]}</strong>

        <span>${item[1]}</span>

      </div>

    `;

  });

}


/* =========================
   HINDI VYANJAN
========================= */

const vyanjan = [
  ["क","कमल 🌸"],
  ["ख","खरगोश 🐇"],
  ["ग","गमला 🪴"],
  ["घ","घर 🏠"],
  ["ङ","ङ"],
  ["च","चम्मच 🥄"],
  ["छ","छाता ☂️"],
  ["ज","जहाज ✈️"],
  ["झ","झंडा 🚩"],
  ["ञ","ञ"],
  ["ट","टमाटर 🍅"],
  ["ठ","ठेला 🛒"],
  ["ड","डमरू 🥁"],
  ["ढ","ढक्कन"],
  ["ण","ण"],
  ["त","तरबूज 🍉"],
  ["थ","थैला 👜"],
  ["द","दवात"],
  ["ध","धनुष 🏹"],
  ["न","नल 🚰"],
  ["प","पतंग 🪁"],
  ["फ","फल 🍎"],
  ["ब","बतख 🦆"],
  ["भ","भालू 🐻"],
  ["म","मछली 🐟"],
  ["य","योग 🧘"],
  ["र","रथ 🛞"],
  ["ल","लट्टू"],
  ["व","वन 🌳"],
  ["श","शेर 🦁"],
  ["ष","षट्कोण"],
  ["स","सूरज ☀️"],
  ["ह","हाथी 🐘"],
  ["क्ष","क्षमा"],
  ["त्र","त्रिशूल 🔱"],
  ["ज्ञ","ज्ञान 📚"]
];

const vyanjanGrid =
  document.getElementById("vyanjan-grid");

if(vyanjanGrid){

  vyanjan.forEach(item => {

    vyanjanGrid.innerHTML += `

      <div class="letter-card">

        <strong>${item[0]}</strong>

        <span>${item[1]}</span>

      </div>

    `;

  });

}


/* =========================
   ENGLISH A TO Z
========================= */

const alphabetGrid =
  document.getElementById("alphabet-grid");

const capital =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const small =
  "abcdefghijklmnopqrstuvwxyz";

const englishPictures = [
  "🍎","⚽","🐱","🐶","🐘","🐟",
  "🎁","🏠","🍦","🧃","🪁","🦁",
  "🌙","👃","🍊","✏️","👑","🌹",
  "☀️","🐯","☂️","🚐","❌","🪀",
  "🦓"
];

if(alphabetGrid){

  for(let i = 0; i < 26; i++){

    alphabetGrid.innerHTML += `

      <div class="alpha-card">

        <div class="capital">
          ${capital[i]}
        </div>

        <div class="small">
          ${small[i]}
        </div>

        <div class="picture">
          ${englishPictures[i]}
        </div>

      </div>

    `;

  }

          }
