---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


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


## Remarks

Nurodyta dimensijų lentelė `dimensionSelector` suliejama su `cube` filtro kontekstu ir pakeičiamas filtro konteksto dimensijų detalumo lygis išplečiant nurodytą dimensijos atributų rinkinį `attributeNames`. Dimensijos atributai įtraukiami į lentelės rodinio stulpelius pavadinimu `newColumnNames` arba `attributeNames`, jei nenurodyta.



## Category
Cube
