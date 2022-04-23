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
        polozka.dataset.odpoved = odpovediObjektu[i];
        polozka.textContent = odpovediObjektu[i];
        polozka.addEventListener('click', klikNaOdpoved);

        odpovedi.appendChild(polozka);
    }


}

let mojeOdpovedi = [];



function klikNaOdpoved(event) {
    let odpoved = event.target.dataset.odpoved;
    mojeOdpovedi.push(parseInt(odpoved));
    aktualniOtazka = aktualniOtazka + 1;
    if (aktualniOtazka === otazky.length) {
        //poradi.textContent = "Zavolej funkci, ktera zorazi hodnoceni.";
        ukazHodnoceni();
        zjistiSpravnouOdpoved();
    } else {
        odpovedi.querySelectorAll('li').forEach((element) => element.remove());
        zobrazOtazku();
    }
    console.log(mojeOdpovedi);
}

function zjistiSpravnouOdpoved() {
    for (let i = 0; i < otazky.length; i++) {
        if (mojeOdpovedi[i] === otazky[i].spravnaOdpoved) {
            console.log('spravne');       
        } else {
            console.log('spatne');
        }
    }
}


function ukazHodnoceni() {
    document.querySelector('.kviz').style.display = 'none';
    document.querySelector('.vysledek').style.display = 'block';
    let hodnoceni = document.querySelector('#hodnoceni');


    let pocetSpravnychOdpovedi = 0;

}



