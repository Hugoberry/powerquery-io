---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

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


## Details

Sapludina norādīto dimensiju tabulu <code>dimensionSelector</code> ar kuba <code>cube</code> filtra kontekstu un maina dimensiju granularitāti, izvēršot norādīto dimensiju atribūtu kopu <code>attributeNames</code>. Dimensijas atribūti ir pievienoti tabulveida skatam ar kolonnām, kuru nosaukums ir <code>newColumnNames</code>, vai arī nav norādīts šis: <code>attributeNames</code>.



## Category
Cube
