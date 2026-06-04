---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Mencantumkan jadual dimensi yang ditentukan ke dalam konteks penapis kiub dan mengubah kebutiran dimensi bagi konteks penapis dengan mengembangkan set atribut dimensi yang ditentukan.


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

Menggabungkan jadual dimensi yang ditentukan, `dimensionSelector`, ke dalam konteks penapis `cube` dan mengubah kebutiran dimensi dengan mengembangkan set yang ditentukan, `attributeNames`, bagi atribut dimensi. Atribut dimensi ditambah pada pandangan jadual dengan lajur bernama `newColumnNames` atau `attributeNames` jika tidak ditentukan.



## Category
Cube
