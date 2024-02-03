---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Nurodyta dimensijų lentelė suliejama su kubo filtro kontekstu ir pakeičiamas filtro konteksto dimensijų detalumo lygis išplečiant nurodytą dimensijos atributų rinkinį.


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

Nurodyta dimensijų lentelė <code>dimensionSelector</code> suliejama su kubo <code>cube</code> filtro kontekstu ir pakeičiamas filtro konteksto dimensijų detalumo lygis išplečiant nurodytą dimensijos atributų rinkinį <code>attributeNames</code>. Dimensijos atributai įtraukiami į lentelės rodinio stulpelius pavadinimu <code>newColumnNames</code> arba <code>attributeNames</code>, jei nenurodyta.



## Category
Cube
