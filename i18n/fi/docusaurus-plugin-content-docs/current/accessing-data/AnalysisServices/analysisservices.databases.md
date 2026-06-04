---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Palautta jonkin tietyn isännän Analysis Services -tietokannat.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Palauttaa Analysis Services -esiintymän `server` tietokannat. Valinnainen tietueparametri `options` voidaan antaa määrittämään lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:

-   `TypedMeasureColumns` : Looginen arvo, joka ilmaisee, käytetäänkö moniulotteisessa mallissa tai taulukkomallissa määritettyjä tyyppejä lisättyjen mittarisarakkeiden käyttämille tyypeille. Kun asetus on false, tyyppiä number käytetään kaikille mittarisarakkeille. Tämän asetuksen oletusarvo on false.
-   `Culture` : Maa-asetuksen nimi, joka määrittää tietojen maa-asetuksen. Tämä vastaa yhteysmerkkijonon kielialueen tunnuksen ominaisuutta.
-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on riippuvainen ohjaimesta.
-   `ConnectionTimeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.
-   `SubQueries` : Luku (0, 1 tai 2), joka asettaa SubQueries-ominaisuuden arvon yhteysmerkkijonossa. Tämä ohjaa alivalintojen tai alikuutioiden laskettujen jäsenten toimintaa. (Oletusarvo on 2.)
-   `Implementation`



## Category
Accessing data
