---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Voegt de opgegeven dimensietabel samen met de filtercontext van de kubus en wijzigt de dimensionale granulatie van de filtercontext door de opgegeven set dimensiekenmerken uit te vouwen.


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

Voegt de opgegeven dimensietabel <code>dimensionSelector</code> samen met de filtercontext van kubus <code>cube</code> en wijzigt de dimensionale granulatie door de opgegeven set <code>attributeNames</code> dimensiekenmerken uit te vouwen. De dimensiekenmerken worden toegevoegd aan de tabelweergaven met kolommen genaamd <code>newColumnNames</code>, of <code>attributeNames</code> indien niet opgegeven.



## Category
Cube
