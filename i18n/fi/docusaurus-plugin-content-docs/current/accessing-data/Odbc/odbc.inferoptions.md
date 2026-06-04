---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Palauttaa tuloksen siitä, kun ODBC-ohjaimen SQL-ominaisuudet yritetään johtaa.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Palauttaa SQL-ominaisuuksien yhteysmerkkijonon `connectionString` kanssa ODBC:n avulla suorittamisen yrittämisen tuloksen. `connectionString` voi olla teksti tai ominaisuuden ja arvon parien tietue. Ominaisuusarvot voivat olla teksti tai luku.


## Examples

### Example #1
Palauta pääteltävät SQL-ominaisuudet yhteysmerkkijonolle.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
