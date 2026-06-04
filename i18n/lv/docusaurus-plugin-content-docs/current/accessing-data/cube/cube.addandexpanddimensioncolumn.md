---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Sapludina norādīto dimensiju tabulu ar kuba filtra kontekstu un maina filtra konteksta dimensiju granularitāti, izvēršot norādīto dimensiju atribūtu kopu.


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

Sapludina norādīto dimensiju tabulu, `dimensionSelector`, ar kuba, `cube` filtra kontekstu un maina dimensiju granularitāti, izvēršot norādīto dimensiju atribūtu kopu, `attributeNames`. Dimensijas atribūti ir pievienoti tabulveida skatam ar kolonnām, kuru nosaukums ir `newColumnNames`, vai arī nav norādīts šis: `attributeNames` .



## Category
Cube
