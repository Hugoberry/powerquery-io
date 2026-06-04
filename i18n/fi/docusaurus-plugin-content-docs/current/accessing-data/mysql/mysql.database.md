---
title: MySQL.Database
---

# MySQL.Database


Palauttaa MySQL-tietokannassa käytettävissä olevien SQL-taulukoiden, näkymien ja tallennettujen skalaarifunktioiden taulukon.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Palauttaa tietokantaesiintymässä `server` palvelimen `database` MySQL-tietokannassa käytettävissä olevien SQL-taulukoiden sekä -näkymien ja tallennettujen SQL-skalaarifunktioiden taulukon. Portti voidaan valinnaisesti määrittää palvelimen kanssa erotettuna kaksoispisteellä. Valinnainen tietueparametri `options` voidaan määrittää seuraavien asetusten hallintaa varten:

-   `Encoding` : TextEncoding-arvo, joka määrittää merkistön, jota käytetään kaikkien palvelimeen lähetettävien kyselyiden koodaamiseen (oletusarvo on tyhjäarvo).
-   `CreateNavigationProperties` : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true).
-   `NavigationPropertyNameGenerator` : Funktio, jota käytetään luomaan nimiä siirtymisominaisuuksia varten.
-   `Query` : Alkuperäinen SQL-kysely, jota käytetään tietojen noutamiseen. Jos kysely tuottaa useita tulosjoukkoja, vain ensimmäinen palautetaan.
-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.
-   `ConnectionTimeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.
-   `TreatTinyAsBoolean` : Looginen arvo (true/false), joka määrittää, pakotetaanko palvelimen pienikokonaislukusarakkeet loogisiksi arvoiksi. Oletusarvo on true.
-   `OldGuids` : Looginen arvo (true/false), joka asettaa, käsitelläänkö char(36)-sarakkeita (jos false) tai binary(16)-sarakkeita (jos true) GUID-tunnuksina. Oletusarvo on false.
-   `ReturnSingleDatabase` : Looginen arvo (true/false), joka asettaa, palautetaanko kaikkien tietokantojen kaikki taulukot (jos false) vai määritetyn tietokannan taulukot ja näkymät (jos true). Oletusarvo on false.
-   `HierarchicalNavigation` : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyinä niiden rakenteiden nimien mukaan (oletusarvo on false).

Tietueparametri määritetään esimerkiksi muodossa \[asetus1 = arvo1, asetus2 = arvo2...\] tai \[Query = "select ..."\].



## Category
Accessing data
