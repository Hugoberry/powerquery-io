---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

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


## Details

Objedinjuje navedenu tabelu dimenzija, <code>dimensionSelector</code>, sa kontekstom filtera kocke, <code>cube</code>, i menja dimenzionu granularnost proširivanjem navedenog skupa, <code>attributeNames</code>, atributa dimenzije. Atributi dimenzije se dodaju u tabelarni prikaz sa kolonama pod nazivom <code>newColumnNames</code>, odnosno <code>attributeNames</code> ako nije navedeno.



## Category
Cube
