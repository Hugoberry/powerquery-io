---
title: OleDb.DataSource
---

# OleDb.DataSource


Palauttaa SQL-taulukoiden ja näkymien taulukon OLE DB -tietolähteestä.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Palauttaa yhteysmerkkijonon `connectionString` määrittämästä OLE DB -tietolähteestä SQL-taulukoiden ja näkymien taulukon.`connectionString` voi olla teksti tai ominaisuusarvoparien tietue. Ominaisuuksien arvot voivat olla tekstiä tai lukuja. Valinnainen tietueparametri, `options`, voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:

-   `CreateNavigationProperties` : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true).
-   `NavigationPropertyNameGenerator` : Funktio, jota käytetään luomaan nimiä siirtymisominaisuuksia varten.
-   `Query` : Alkuperäinen SQL-kysely, jota käytetään tietojen noutamiseen. Jos kysely tuottaa useita tulosjoukkoja, vain ensimmäinen palautetaan.
-   `HierarchicalNavigation` : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyinä niiden rakenteiden nimien mukaan (oletusarvo on true).
-   `ConnectionTimeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.
-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.
-   `SqlCompatibleWindowsAuth` : Looginen arvo (true/false), joka määrittää, tuotetaanko SQL Server -yhteensopivia yhteysmerkkijonovalitsimia Windows-todennukselle. Oletusarvo on true.

Tietueparametri määritetään esimerkiksi muodossa \[asetus1 = arvo1, asetus2 = arvo2...\] tai \[Query = "select ..."\].



## Category
Accessing data
