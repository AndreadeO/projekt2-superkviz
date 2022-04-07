const otazky = [
    {
        zneniOtazky: 'Jak se nazývá tato dětská hračka, která byla oblíbená v Československu v 80. letech?',
        obrazek: 'obrazky/moncicak.jpg',
        odpovedi: ['Mončičák', 'Tamagoči', 'Furby'],     
        spravnaOdpoved: [0]
    },
    {
        zneniOtazky: 'Jaký druh ovoce není vidět na obrázku?',
        obrazek: 'obrazky/ovoce.jpg',
        odpovedi: ['Borůvka', 'Jahoda', 'Hroznové víno'],
        spravnaOdpoved: [0]     
    },
    {
        zneniOtazky: 'Jaký je nejoblíbenější alkoholický nápoj v České republice?',
        obrazek: 'obrazky/pivo.jpg',
        odpovedi: ['Gin', 'Pivo', 'Tequila'],
        spravnaOdpoved: [1]     
    },
    {
        zneniOtazky: 'Jaká pohádková postava je na obrázku?',
        obrazek: 'obrazky/snehurka.jpg',
        odpovedi: ['Elsa', 'Sněhurka', 'Maková panenka'],
        spravnaOdpoved: [1]    
    }
];

const kviz = document.querySelector('kviz');


for (let i = 0; i < otazky.length; i++) {

    const otazka = document.getElementById('otazka');
    otazka.textContent = otazky[i].zneniOtazky;

    const fotoOtazky = document.getElementById('obrazek');
    fotoOtazky.src = otazky[i].obrazek;

    const odpovedi = document.createElement('li');
    odpovedi.classList.add('odpoved');
    odpovedi.textContent = otazky[i].odpovedi;


    otazka.appendChild(odpovedi);


    //kviz.appendChild(otazka);
    
}


function zobrazOtazku(ot) {
    let otazka = document.getElementById('otazka');
    otazka.textContent = ot.zneniOtazky;

    let odpoved = document.querySelectorAll('.odpovedi');

    //odpoved.forEach((odpovedi) => 

}

zobrazOtazku(otazky);

/*
// Nejdříve si vytvoř objekt, který bude držet voje super otázky :-)

const otazky = [];

// Dále budeš potřebovat další proměnné - jaké?


// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function zobrazOtazku() {}

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() {}

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {}
*/



