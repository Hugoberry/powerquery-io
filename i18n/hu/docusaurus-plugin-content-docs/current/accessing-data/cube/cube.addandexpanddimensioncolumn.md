---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


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


## Remarks

A megadott dimenziótáblát (`dimensionSelector`) a(z) `cube` szűrőkörnyezetében egyesíti, és a megváltoztatja a szűrőkörnyezet dimenziógranularitását a dimenzióattribútumok megadott készletének (`attributeNames`) kibontásával. A dimenzióértékek fel lesznek véve a táblázatos nézetbe `newColumnNames` nevű oszlopokkal, illetve `attributeNames` nevűekkel, ha nincs más megadva.



## Category
Cube
