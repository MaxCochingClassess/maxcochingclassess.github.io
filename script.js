const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
/* =================================================
   MAX KIDS STUDY JAVASCRIPT
================================================= */


/* 1 TO 100 TABLES */

const table100 = document.getElementById("table100");

if(table100){

  for(let number = 1; number <= 100; number++){

    let html = `<div class="table-card">
      <strong>Table ${number}</strong>`;

    for(let i = 1; i <= 10; i++){

      html += `${number} × ${i} = ${number*i}<br>`;

    }

    html += `</div>`;

    table100.innerHTML += html;

  }

}


/* 1 TO 10 TABLES */

const table10 = document.getElementById("table10");

if(table10){

  for(let number = 1; number <= 10; number++){

    let html = `<div class="small-table">
      <b>Table ${number}</b>`;

    for(let i = 1; i <= 10; i++){

      html += `${number} × ${i} = ${number*i}<br>`;

    }

    html += `</div>`;

    table10.innerHTML += html;

  }

}


/* ENGLISH A-Z + SMALL a-z */

const alphabet = document.getElementById("alphabet");

if(alphabet){

  const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const small = "abcdefghijklmnopqrstuvwxyz";

  for(let i = 0; i < 26; i++){

    alphabet.innerHTML += `
      <div class="alpha-card">

        <strong>${capital[i]}</strong>

        <small>${small[i]}</small>

        <span>Letter ${i+1}</span>

      </div>
    `;

  }

}
