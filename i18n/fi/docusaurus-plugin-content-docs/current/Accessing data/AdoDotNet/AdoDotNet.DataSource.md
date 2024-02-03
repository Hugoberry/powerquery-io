---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Palauttaa ADO.NET-tietolähteen rakennekokoelman.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Palauttaa ADO.NET-tietolähteen rakennekokoelman sekä palvelun nimen <code>providerName</code> ja yhteysmerkkijonon <code>connectionString</code>. <code>connectionString</code> voi olla teksti tai ominaisuuden ja arvon parien tietue. Ominaisuuksien arvot voivat olla tekstiä tai numeroita. Valinnainen tietueparametri <code>options</code> voidaan antaa määrittämään lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:    <ul><li><code>CommandTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan palvelinpuolen kysely&#228; saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.</li><li><code>SqlCompatibleWindowsAuth</code> : Looginen arvo (true/false), joka m&#228;&#228;ritt&#228;&#228;, tuotetaanko SQL Server -yhteensopivia yhteysmerkkijonovalitsimia Windows-todennukselle. Oletusarvo on true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
