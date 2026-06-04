---
title: SapHana.Database
---

# SapHana.Database


Palauttaa SAP HANA -tietokannan paketit.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Palauttaa moniulotteisten pakettien taulukon SAP HANA -tietokannasta `server`. Valinnainen tietueparametri `options` voidaan määrittää ohjaamaan seuraavia asetuksia:

-   `Query` : Alkuperäinen SQL-kysely, jota käytetään tietojen noutamiseen. Jos kysely tuottaa useita tulosjoukkoja, vain ensimmäinen palautetaan.
-   `Distribution` : SapHanaDistribution, joka asettaa yhteysmerkkijonon Distribution-ominaisuuden arvon. Lausekkeen reitityksen avulla arvioidaan hajautetun järjestelmän oikea palvelinsolmu. Oletusarvo on SapHanaDistribution.All.
-   `Implementation` : Määrittää käytettävän SAP HANA -liittimen toteutuksen.
-   `EnableColumnBinding` : Sitoo muuttujat SAP HANA -tulosjoukon sarakkeisiin tietoja noudettaessa. Saattaa parantaa suorituskykyä, mutta muistia käytetään enemmän. Oletusarvo on epätosi.
-   `ConnectionTimeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on 15 sekuntia.
-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.



## Category
Accessing data
