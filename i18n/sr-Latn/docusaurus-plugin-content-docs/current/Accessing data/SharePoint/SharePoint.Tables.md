---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Vraća tabelu koja obuhvata sadržaj sa SharePoint liste.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Vraća tabelu koja sadrži red za svaku stavku sa liste pronađenu na navedenoj SharePoint listi, <code>url</code>. Svaki red sadrži svojstva liste. <code>options</code> može da se navede radi kontrole sledećih opcija    <ul><li><code>ApiVersion</code> : Broj (14 ili 15) ili tekst „Automatski“ koji navodi verziju SharePoint API-ja koja će se koristiti za ovaj sajt. Kada verzija API-ja nije navedena, koristi se 14. Kada se navede „Automatski“, verzija servera će se automatski otkriti ukoliko je moguće. Ako nije, verzija će podrazumevano biti 14. SharePoint sajtovi koji nisu na engleskom zahtevaju barem verziju 15.</li><li><code>Implementation</code> : Opcionalno. Navodi koju verziju SharePoint konektora treba koristiti. Prihvaćene vrednosti su „2.0“ ili bez vrednosti. Ako je vrednost „2.0“, koristi se primena 2.0 SharePoint konektora. Ako je vrednost bez vrednosti, koristi se originalna primena SharePoint konektora.</li><li><code>ViewMode</code> : Opcionalno. Ova opcija je važeća samo za primenu 2.0. Prihvaćene vrednosti su „Sve“ i „Podrazumevano“. Ako nije navedena nijedna vrednost, vrednost je postavljena na „Sve“. Kada se navede „Sve“, prikaz uključuje sve kolone koje su kreirali korisnici i sistemski definisane kolone. Kada se navede „Podrazumevano“, prikaz će se podudarati sa onima koje korisnik vidi kada gleda listu na mreži u svakom prikazu koji je korisnik postavio kao podrazumevani u postavkama. Ako korisnik uređuje podrazumevani prikaz da bi dodao ili uklonio kolone koje je kreirao korisnik ili sistemski definisane kolone, ili kreiranjem novog prikaza i njegovim podešavanjem kao podrazumevanog, ove promene će se preneti kroz konektor.</li><li><code>DisableAppendNoteColumns</code> : Sprečava konektor da koristi zasebnu krajnju tačku za kolone beleški.</li></ul>    



## Category
Accessing data
