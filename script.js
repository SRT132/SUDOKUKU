// Grille pré-remplie : 0 = case vide
const grilleInitiale = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
];

const grilleEl = document.getElementById("grille");
const verifierBtn = document.getElementById("verifier");

function afficherGrille(grille) {
  grilleEl.innerHTML = "";

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1;
      input.className = "cell";

      const value = grille[row][col];
      if (value !== 0) {
        input.value = value;
        input.disabled = true;
      } else {
        input.addEventListener("input", (e) => {
          e.target.value = e.target.value.replace(/[^1-9]/, "");
        });
      }

      grilleEl.appendChild(input);
    }
  }
}

function lireGrille() {
  const inputs = document.querySelectorAll(".cell");
  let index = 0;
  const result = Array.from({ length: 9 }, () => Array(9).fill(0));

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = inputs[index].value;
      result[r][c] = val ? parseInt(val) : 0;
      index++;
    }
  }
  return result;
}

function verifierSimple() {
  const g = lireGrille();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const v = g[r][c];
      if (v < 1 || v > 9) {
        alert("Certaines cases sont vides ou invalides.");
        return;
      }
    }
  }

  alert("Toutes les cases sont remplies (vérification simple).");
}

// Affichage initial
afficherGrille(grilleInitiale);

// Bouton
verifierBtn.addEventListener("click", verifierSimple);
