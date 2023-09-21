// Criando um array (ou vetor)

let equipe =["Christian Horner", "Hannah Schmitz","Gianpiero Lambiase","Ferrari"];

document.write('<h2 style="color: blue;">Criando um array (ou vetor)</h2><br>');


// 1ª Digitação (Aqui)


document.write("O melhor chefe da F1 é " +equipe[0]+"<br><br>");
document.write("O melhor estrategista da F1 é o " +equipe[1]+"<br><br>");
document.write("O melhor Engenheiro da F1 é o " +equipe[2]+"<br><br>");

document.write("A melhor equipe é a " +equipe[3]+ ", por mais que não tenham os melhores profissionais<br></br>");
// ______________________________________________________________________________________

// ________________________________________________________________________________
// Array como matriz (array bidimensional)

document.write('<h2 style="color: blue;">Array como matriz (array bidimensional)</h2><br>');

let equipesF1 = [
    // 0           1             2
    ['Mercedes', 'Ferrari', 'Red Bull'], // 0

    // 0         1          2           3         4
    ['McLaren', 'Haas', 'AlphaTauri', 'Alpine', 'Williams'], // 1
];

// Exibir Ferrari


// 2ª Digitação (Aqui)

document.write(`Melhor equipe da F1 da atualidade:<strong> ${equipesF1[0][1]} </strong>`);