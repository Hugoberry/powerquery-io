---
title: OleDb.Query
---

# OleDb.Query


Palauttaa alkuperäisen kyselyn OLE DB -tietolähteelle suorittamisen tuloksen.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Palauttaa kohteen `query` yhteysmerkkijonon `connectionString` kanssa suorittamisen tuloksen. `connectionString` voi olla teksti tai ominaisuuden ja arvon parien tietue. Ominaisuuksien arvot voivat olla teksti tai luku. Valinnainen tietueparametri `options` voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:

-   `ConnectionTimeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.
-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.
-   `SqlCompatibleWindowsAuth` : Looginen arvo (true/false), joka määrittää, tuotetaanko SQL Server -yhteensopivia yhteysmerkkijonovalitsimia Windows-todennukselle. Oletusarvo on true.



## Category
Accessing data
