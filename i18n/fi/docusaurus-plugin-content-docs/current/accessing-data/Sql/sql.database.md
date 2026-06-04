---
title: Sql.Database
---

# Sql.Database


Palauttaa SQL Server -tietokannan SQL-taulukoiden, näkymien ja tallennettujen funktioiden taulukon.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Palauttaa SQL-taulukoiden, näkymien ja tallennettujen funktioiden taulukon SQL Server -tietokannasta `database` palvelimella `server`. Portti voidaan valinnaisesti määrittää palvelimen yhteydessä erotettuna kaksoispisteellä tai pilkulla. Valinnainen tietueparametri `options` voidaan määrittää seuraavien asetusten hallintaa varten:

-   `Query` : Alkuperäinen SQL-kysely, jota käytetään tietojen noutamiseen. Jos kysely tuottaa useita tulosjoukkoja, vain ensimmäinen palautetaan.
-   `CreateNavigationProperties` : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true).
-   `NavigationPropertyNameGenerator` : Funktio, jota käytetään luomaan nimiä siirtymisominaisuuksia varten.
-   `MaxDegreeOfParallelism` : Luku, joka asettaa maxdop-kyselylauseen arvon muodostetussa SQL-kyselyssä.
-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.
-   `ConnectionTimeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.
-   `HierarchicalNavigation` : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyinä niiden rakenteiden nimien mukaan (oletusarvo on false).
-   `MultiSubnetFailover` : Looginen arvo (true/false), joka asettaa MultiSubnetFailover-ominaisuuden arvon yhteysmerkkijonossa (oletusarvo on false).
-   `UnsafeTypeConversions` : Looginen arvo (true/false), joka arvon ollessa true yrittää delegoida lähteeseen tyyppimuunnoksia, mikä voi epäonnistua ja aiheuttaa koko kyselyn epäonnistumisen. Ei suositella yleiseen käyttöön.
-   `ContextInfo` : Binaariarvo, jota käytetään asettamaan CONTEXT\_INFO ennen kunkin komennon suorittamista.
-   `OmitSRID` : Looginen arvo (true/false), joka arvon ollessa tosi jättää pois SRID-kohteen tuotettaessa Well-Known Textiä geometria- ja maantiedetyypeistä.
-   `EnableCrossDatabaseFolding` : Looginen arvo (tosi/epätosi), joka arvon ollessa tosi sallii kyselyn delegoinnin lähteeseen saman palvelimen eri tietokannoissa. Oletusarvo on epätosi.

Tietueparametri määritetään esimerkiksi muodossa \[asetus1 = arvo1, asetus2 = arvo2...\] tai \[Query = "select ..."\].



## Category
Accessing data
