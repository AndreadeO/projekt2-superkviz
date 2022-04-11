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

const kviz = document.querySelector('.kviz');
let poradi = document.getElementById('poradi');
let otazka = document.getElementById('otazka');
let odpoved = document.querySelector('.odp');
let obrazek = document.getElementById('obrazek');


function spustKviz() {
    otazka.textContent = otazky[0].zneniOtazky;
    obrazek.src = otazky[0].obrazek;
    poradi = 0;
    

}

function zobrazOtazku() {
    
}

spustKviz();

