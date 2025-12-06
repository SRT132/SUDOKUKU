// Mission 1.2 : Représenter une grille en JavaScript
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

// Mission 1.3 : Afficher la grille dans le DOM
function afficherGrille(grille) {
    const gridContainer = document.getElementById('sudoku-grid');
    gridContainer.innerHTML = '';

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';

            if (grille[i][j] !== 0) {
                // Case pré-remplie (non modifiable)
                cell.classList.add('prefilled');
                cell.textContent = grille[i][j];
            } else {
                // Case vide (modifiable par le joueur)
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1;
                input.setAttribute('data-row', i);
                input.setAttribute('data-col', j);
                
                // Accepter uniquement les chiffres de 1 à 9
                input.addEventListener('input', function(e) {
                    const value = e.target.value;
                    if (value && (!/^[1-9]$/.test(value))) {
                        e.target.value = '';
                    }
                });

                cell.appendChild(input);
            }

            gridContainer.appendChild(cell);
        }
    }
}

function verifierSolution() {
    alert("Fonctionnalité de vérification à implémenter dans les prochaines missions !");
}

// Afficher la grille au chargement
afficherGrille(grilleInitiale);