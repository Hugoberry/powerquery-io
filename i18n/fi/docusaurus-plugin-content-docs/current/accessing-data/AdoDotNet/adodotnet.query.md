---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Palauttaa alkuperäisen kyselyn ADO.NET-tietolähteelle suorittamisen tuloksen.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Palauttaa tuloksen kohteen `query` suorittamisesta käyttäen yhteysmerkkijonoa `connectionString` ja ADO.NET-palvelua `providerName`. `connectionString` voi olla teksti tai ominaisuuden ja arvon parien tietue. Ominaisuusarvot voivat olla teksti tai luku. Valinnainen tietueparametri `options` voidaan antaa määrittämään lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:

-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.
-   `SqlCompatibleWindowsAuth` : Looginen arvo (true/false), joka määrittää, tuotetaanko SQL Server -yhteensopivia yhteysmerkkijonovalitsimia Windows-todennukselle. Oletusarvo on true.



## Category
Accessing data
