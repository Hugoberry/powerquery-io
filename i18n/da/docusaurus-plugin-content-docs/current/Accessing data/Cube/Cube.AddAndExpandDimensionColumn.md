---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Fletter den angivne dimensionstabel sammen med kubens filterkontekst og ændrer den dimensionelle granularitet for filterkonteksten ved at udvide det angivne sæt dimensionsattributter.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Details

Fletter den angivne dimensionstabel, <code>dimensionSelector</code>, sammen med kubens, <code>cube</code>, filterkontekst og ændrer den dimensionelle granularitet ved at udvide det angivne sæt, <code>attributeNames</code>, dimensionsattributter. Dimensionsattributterne føjes til tabelvisningen med kolonner, der kaldes <code>newColumnNames</code> eller <code>attributeNames</code>, hvis det ikke er angivet.



## Category
Cube
