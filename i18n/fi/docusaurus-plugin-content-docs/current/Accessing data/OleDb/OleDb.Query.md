---
title: OleDb.Query
---

# OleDb.Query


## Description

Palauttaa alkuperäisen kyselyn OLE DB -tietolähteelle suorittamisen tuloksen.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Palauttaa kohteen <code>query</code> yhteysmerkkijonon <code>connectionString</code> kanssa suorittamisen tuloksen. <code>connectionString</code> voi olla teksti tai ominaisuuden ja arvon parien tietue. Ominaisuuksien arvot voivat olla teksti tai luku. Valinnainen tietueparametri <code>options</code> voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:    <ul><li><code>ConnectionTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan odotetaan, ennen kuin yritys yhdist&#228;&#228; palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.</li><li><code>CommandTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan palvelinpuolen kysely&#228; saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.</li><li><code>SqlCompatibleWindowsAuth</code> : Looginen arvo (true/false), joka m&#228;&#228;ritt&#228;&#228;, tuotetaanko SQL Server -yhteensopivia yhteysmerkkijonovalitsimia Windows-todennukselle. Oletusarvo on true.</li></ul>



## Category
Accessing data
