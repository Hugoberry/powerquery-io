---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Palauttaa SQL-taulukoiden ja näkymien taulukon OLE DB -tietolähteestä.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Palauttaa yhteysmerkkijonon <code>connectionString</code> määrittämästä OLE DB -tietolähteestä SQL-taulukoiden ja näkymien taulukon. <code>connectionString</code> voi olla teksti tai ominaisuus–arvo-parien tietue. Ominaisuuksien arvot voivat olla tekstiä tai lukuja. Valinnainen tietueparametri <code>options</code> voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:    <ul><li><code>CreateNavigationProperties</code> : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true).</li><li><code>NavigationPropertyNameGenerator</code> : Funktio, jota k&#228;ytet&#228;&#228;n luomaan nimi&#228; siirtymisominaisuuksia varten.</li><li><code>Query</code> : Alkuper&#228;inen SQL-kysely, jota k&#228;ytet&#228;&#228;n tietojen noutamiseen. Jos kysely tuottaa useita tulosjoukkoja, vain ensimm&#228;inen palautetaan.</li><li><code>HierarchicalNavigation</code> : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyin&#228; niiden rakenteiden nimien mukaan (oletusarvo on true).</li><li><code>ConnectionTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan odotetaan, ennen kuin yritys yhdist&#228;&#228; palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.</li><li><code>CommandTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan palvelinpuolen kysely&#228; saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.</li><li><code>SqlCompatibleWindowsAuth</code> : Looginen arvo (true/false), joka m&#228;&#228;ritt&#228;&#228;, tuotetaanko SQL Server -yhteensopivia yhteysmerkkijonovalitsimia Windows-todennukselle. Oletusarvo on true.</li></ul>    Tietueparametri määritetään esimerkiksi muodossa [asetus1 = arvo1, asetus2 = arvo2...] tai [Query = "select ..."].



## Category
Accessing data
