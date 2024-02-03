---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Menggabungkan jadual dimensi yang ditentukan ke dalam konteks penapis kiub dan mengubah kebutiran dimensi bagi konteks penapis dengan mengembangkan set atribut dimensi yang ditentukan.


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

Menggabungkan jadual dimensi yang ditentukan, <code>dimensionSelector</code>, ke dalam konteks penapis kiub, <code>cube</code>, dan mengubah kebutiran dimensi dengan mengembangkan set, <code>attributeNames</code>, atribut dimensi yang ditentukan. Atribut dimensi ditambah pada pandangan jadual dengan lajur bernama <code>newColumnNames</code> atau <code>attributeNames</code> jika tidak ditentukan.



## Category
Cube
