---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


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


## Remarks

Voegt de opgegeven dimensietabel `dimensionSelector` samen met de filtercontext van de `cube` en wijzigt de dimensionale granulatie door de opgegeven set `attributeNames` dimensiekenmerken uit te vouwen. De dimensiekenmerken worden toegevoegd aan de tabelweergaven met kolommen genaamd `newColumnNames`, of `attributeNames` indien niet opgegeven.



## Category
Cube
