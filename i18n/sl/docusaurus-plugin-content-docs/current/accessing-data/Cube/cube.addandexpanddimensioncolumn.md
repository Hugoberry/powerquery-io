---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Združi navedeno tabelo dimenzij v kontekst filtra kocke in spremeni dimenzionalno granularnost konteksta filtra z razširjanjem navedenega nabora dimenzionalnih atributov.


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

Združi določeno tabelo dimenzije `dimensionSelector`, v kontekst filtra za `cube` in spremeni dimenzionalno granularnost z razširjanjem navedenega nabora `attributeNames`, atributov dimenzije. Dimenzionalni atributi se dodajo v tabelarni pogled s stolpci, poimenovanimi `newColumnNames` ali `attributeNames`, če ime ni navedeno.



## Category
Cube
