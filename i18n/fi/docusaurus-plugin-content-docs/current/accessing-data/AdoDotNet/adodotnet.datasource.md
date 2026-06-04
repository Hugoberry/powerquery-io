---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Palauttaa ADO.NET-tietolähteen rakennekokoelman.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Palauttaa ADO.NET-tietolähteen rakennekokoelman sekä palvelun nimen `providerName` ja yhteysmerkkijonon `connectionString`. `connectionString` voi olla teksti tai ominaisuuden ja arvon parien tietue. Ominaisuuksien arvot voivat olla tekstiä tai numeroita. Valinnainen tietueparametri `options` voidaan antaa määrittämään lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:

-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.
-   `SqlCompatibleWindowsAuth` : Looginen arvo (true/false), joka määrittää, tuotetaanko SQL Server -yhteensopivia yhteysmerkkijonovalitsimia Windows-todennukselle. Oletusarvo on true.
-   `TypeMap`



## Category
Accessing data
