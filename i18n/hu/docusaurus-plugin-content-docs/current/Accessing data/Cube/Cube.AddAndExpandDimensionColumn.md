---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

A megadott dimenziótáblát a kocka szűrőkörnyezetében egyesíti, és a megváltoztatja a szűrőkörnyezet dimenziógranularitását a dimenzióattribútumok megadott készletének kibontásával.


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

A megadott dimenziótáblát (<code>dimensionSelector</code>) a kocka (<code>cube</code>) szűrőkörnyezetében egyesíti, és a megváltoztatja a szűrőkörnyezet dimenziógranularitását a dimenzióattribútumok megadott készletének (<code>attributeNames</code>) kibontásával. A dimenzióértékek fel lesznek véve a táblázatos nézetbe <code>newColumnNames</code> nevű oszlopokkal, illetve <code>attributeNames</code> nevűekkel, ha nincs más megadva.



## Category
Cube
