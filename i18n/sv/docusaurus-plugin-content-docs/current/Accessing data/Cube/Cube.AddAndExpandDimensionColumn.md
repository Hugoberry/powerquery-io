---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Slår ihop den angivna dimensionstabellen med kubens filterkontext och ändrar filterkontextens dimensionsgranularitet genom att expandera den angivna uppsättningen med dimensionsattribut.


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

Slår ihop den angivna dimensionstabellen (<code>dimensionSelector</code>) med kubens (<code>cube</code>) filterkontext och ändrar filterkontextens dimensionsgranularitet genom att expandera den angivna uppsättningen (<code>attributeNames</code>) med dimensionsattribut. Dimensionsattributen läggs till i tabellvyn med kolumner namngivna <code>newColumnNames</code>, eller <code>attributeNames</code> om inget anges.



## Category
Cube
