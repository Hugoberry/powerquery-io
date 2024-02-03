---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Palauttaa SQL-taulukkojen ja -näkymien taulukon ODBC-tietolähteestä. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Palauttaa SQL-taulukkojen ja -näkymien taulukon yhteysmerkkijonon <code>connectionString</code> määrittämästä ODBC-tietolähteestä. <code>connectionString</code> voi olla teksti tai ominaisuuden ja arvon parien tietue. Ominaisuusarvot voivat olla teksti tai luku. Valinnainen tietueparametri <code>options</code> voidaan antaa määrittämään lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:    <ul><li><code>CreateNavigationProperties</code> : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true).</li><li><code>HierarchicalNavigation</code> : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyin&#228; niiden rakenteiden nimien mukaan (oletusarvo on false).</li><li><code>ConnectionTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan odotetaan, ennen kuin yritys yhdist&#228;&#228; palvelimeen lopetetaan. Oletusarvo on 15 sekuntia.</li><li><code>CommandTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan palvelinpuolen kysely&#228; saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.</li><li><code>SqlCompatibleWindowsAuth</code> : Looginen arvo (true/false), joka m&#228;&#228;ritt&#228;&#228;, tuotetaanko SQL Server -yhteensopivia yhteysmerkkijonovalitsimia Windows-todennukselle. Oletusarvo on true.</li></ul>


## Examples

### Example #1 
Palauta SQL-taulukot ja -näkymät annetusta yhteysmerkkijonosta.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
