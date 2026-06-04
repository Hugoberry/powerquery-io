---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Palauttaa monidimensioisten kuutioiden tai taulukkomallien taulukon Analysis Services -tietokannasta.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Palauttaa moniulotteisten kuutioiden tai taulukkomallien taulukon Analysis Services -tietokannasta `database` palvelimessa `server`. Valinnainen tietueparametri `options` voidaan määrittää ohjaamaan seuraavia asetuksia:

-   `Query` : Alkuperäinen MDX-kysely, jota käytetään tietojen noutamiseen.
-   `TypedMeasureColumns` : Looginen arvo, joka ilmaisee, käytetäänkö moniulotteisessa mallissa tai taulukkomallissa määritettyjä tyyppejä lisättyjen mittarisarakkeiden käyttämille tyypeille. Kun asetus on false, tyyppiä number käytetään kaikille mittarisarakkeille. Tämän asetuksen oletusarvo on false.
-   `Culture` : Maa-asetuksen nimi, joka määrittää tietojen maa-asetuksen. Tämä vastaa yhteysmerkkijonon kielialueen tunnuksen ominaisuutta.
-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on riippuvainen ohjaimesta.
-   `ConnectionTimeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.
-   `SubQueries` : Luku (0, 1 tai 2), joka asettaa SubQueries-ominaisuuden arvon yhteysmerkkijonossa. Tämä ohjaa alivalintojen tai alikuutioiden laskettujen jäsenten toimintaa. (Oletusarvo on 2.)
-   `Implementation`



## Category
Accessing data
