---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Objedinjuje navedenu tabelu dimenzija sa kontekstom filtera kocke i menja dimenzionu granularnost konteksta filtera proširivanjem navedenog skupa atributa dimenzije.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Remarks

Objedinjuje navedenu tabelu dimenzija, `dimensionSelector`, sa kontekstom filtera, `cube`, i menja dimenzionu granularnost proširivanjem navedenog skupa, `attributeNames`, atributa dimenzije. Atributi dimenzije se dodaju u tabelarni prikaz sa kolonama pod nazivom `newColumnNames`, odnosno `attributeNames` ako nije navedeno.



## Category
Cube
