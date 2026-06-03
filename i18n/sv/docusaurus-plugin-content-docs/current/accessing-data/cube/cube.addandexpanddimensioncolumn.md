---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


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


## Remarks

Sammanfogar den angivna dimensionstabellen `dimensionSelector` i filterkontexten för `cube` och ändrar dimensionskornigheten genom att expandera den angivna uppsättningen, `attributeNames`, för dimensionsattribut. Dimensionsattributen läggs till i tabellvyn med kolumner namngivna `newColumnNames`, eller `attributeNames` om inget anges.



## Category
Cube
