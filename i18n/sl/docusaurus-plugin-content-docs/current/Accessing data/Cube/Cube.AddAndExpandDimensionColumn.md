---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

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


## Details

Združi navedeno tabelo dimenzij (<code>dimensionSelector</code>) v kontekst filtra kocke (<code>cube</code>) in spremeni dimenzionalno granularnost konteksta filtra z razširjanjem navedenega nabora (<code>attributeNames</code>) dimenzionalnih atributov. Dimenzionalni atributi se dodajo v tabelarni pogled s stolpci, poimenovanimi <code>newColumnNames</code> ali <code>attributeNames</code>, če ime ni navedeno.



## Category
Cube
