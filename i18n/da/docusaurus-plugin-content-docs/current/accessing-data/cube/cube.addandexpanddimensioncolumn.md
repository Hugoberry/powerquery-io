---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Fletter den angivne dimensionstabel sammen med kubens filterkontekst og ændrer den dimensionelle kornethed for filterkonteksten ved at udvide det angivne sæt dimensionsattributter.


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

Fletter den angivne dimensionstabel `dimensionSelector`, sammen med filterkonteksten af `cube` og ændrer den dimensionelle kornethed ved at udvide det angivne sæt `attributeNames`, dimensionsattributter. Dimensionsattributterne føjes til tabelvisningen med kolonner, der kaldes `newColumnNames` eller `attributeNames`, hvis det ikke er angivet.



## Category
Cube
