---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

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


## Details

Palauttaa tuloksen kohteen <code>query</code> suorittamisesta käyttäen yhteysmerkkijonoa <code>connectionString</code> ja ADO.NET-palvelua <code>providerName</code>. <code>connectionString</code> voi olla teksti tai ominaisuuden ja arvon parien tietue. Ominaisuusarvot voivat olla teksti tai luku. Valinnainen tietueparametri <code>options</code> voidaan antaa määrittämään lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:    <ul><li><code>CommandTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan palvelinpuolen kysely&#228; saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.</li><li><code>SqlCompatibleWindowsAuth</code> : Looginen arvo (true/false), joka m&#228;&#228;ritt&#228;&#228;, tuotetaanko SQL Server -yhteensopivia yhteysmerkkijonovalitsimia Windows-todennukselle. Oletusarvo on true.</li></ul>



## Category
Accessing data
