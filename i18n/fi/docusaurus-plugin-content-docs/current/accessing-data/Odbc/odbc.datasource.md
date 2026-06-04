---
title: Odbc.DataSource
---

# Odbc.DataSource


Palauttaa SQL-taulukkojen ja -näkymien taulukon ODBC-tietolähteestä.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Palauttaa SQL-taulukkojen ja -näkymien taulukon yhteysmerkkijonon `connectionString` määrittämästä ODBC-tietolähteestä. `connectionString` voi olla teksti tai ominaisuuden ja arvon parien tietue. Ominaisuusarvot voivat olla teksti tai luku. Valinnainen tietueparametri `options` voidaan antaa määrittämään lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:

-   `CreateNavigationProperties` : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true).
-   `HierarchicalNavigation` : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyinä niiden rakenteiden nimien mukaan (oletusarvo on false).
-   `ConnectionTimeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on 15 sekuntia.
-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.
-   `SqlCompatibleWindowsAuth` : Looginen arvo (true/false), joka määrittää, tuotetaanko SQL Server -yhteensopivia yhteysmerkkijonovalitsimia Windows-todennukselle. Oletusarvo on true.


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
