---
title: Odbc.Query
---

# Odbc.Query


Palauttaa alkuperäisen kyselyn ODBC-tietolähteelle suorittamisen tuloksen.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Palauttaa kohteen `query` yhteysmerkkijonon `connectionString` kanssa suorittamisen tuloksen. `connectionString` voi olla teksti tai ominaisuuden ja arvon parien tietue. Ominaisuusarvot voivat olla teksti tai luku. Valinnainen tietueparametri `options` voidaan antaa määrittämään lisäominaisuuksia. Tietue voi sisältää seuraavat kentät:

-   `ConnectionTimeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on 15 sekuntia.
-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.
-   `SqlCompatibleWindowsAuth` : Looginen arvo (true/false), joka määrittää, tuotetaanko SQL Server -yhteensopivia yhteysmerkkijonovalitsimia Windows-todennukselle. Oletusarvo on true.


## Examples

### Example #1
Palauta yksinkertaisen kyselyn suorittamisen tulos annetulle yhteysmerkkijonolle.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
