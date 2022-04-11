const otazky = [
    {
        zneniOtazky: 'Jak se nazývá tato dětská hračka, která byla oblíbená v Československu v 80. letech?',
        obrazek: 'obrazky/moncicak.jpg',
        odpovedi: ['Mončičák', 'Tamagoči', 'Furby'],     
        spravnaOdpoved: 0,
    },
    {
        zneniOtazky: 'Jaký druh ovoce není vidět na obrázku?',
        obrazek: 'obrazky/ovoce.jpg',
        odpovedi: ['Borůvka', 'Jahoda', 'Hroznové víno'],
        spravnaOdpoved: 0,     
    },
    {
        zneniOtazky: 'Jaký je nejoblíbenější alkoholický nápoj v České republice?',
        obrazek: 'obrazky/pivo.jpg',
        odpovedi: ['Gin', 'Pivo', 'Tequila'],
        spravnaOdpoved: 1,   
    },
    {
        zneniOtazky: 'Jaká pohádková postava je na obrázku?',
        obrazek: 'obrazky/snehurka.jpg',
        odpovedi: ['Elsa', 'Sněhurka', 'Maková panenka'],
        spravnaOdpoved: 1,  
    },
];

let poradi = document.getElementById('poradi');
let otazka = document.getElementById('otazka');
let obrazek = document.getElementById('obrazek');
let moznosti = document.getElementById('moznosti');
let odpovedi = document.getElementById('odpovedi');

let aktualniOtazka = 0;

zobrazOtazku();

function zobrazOtazku() {
    poradi.textContent = "Otázka " + (aktualniOtazka + 1) + "/" + otazky.length;
    otazka.textContent = otazky[aktualniOtazka].zneniOtazky;
    obrazek.src = otazky[aktualniOtazka].obrazek;

    let odpovediObjektu = otazky[aktualniOtazka].odpovedi;

    for (let i = 0; i < odpovediObjektu.length; i++) {
        let polozka = document.createElement('li');
        polozka.textContent = odpovediObjektu[i];
        polozka.addEventListener('click', klikNaOdpoved);

        odpovedi.appendChild(polozka);
    }


}


function klikNaOdpoved() {
    resetOdpovedi();

    aktualniOtazka = aktualniOtazka + 1;
    zobrazOtazku();
    

}

function resetOdpovedi() {
    while (odpovedi.firstChild) {
        odpovedi.removeChild (odpovedi.firstChild);
    }
}

