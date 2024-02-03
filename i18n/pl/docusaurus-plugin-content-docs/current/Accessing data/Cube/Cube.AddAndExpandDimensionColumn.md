---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Scala określoną tabelę wymiarów w kontekście filtrów modułu i zmienia wymiarowy poziom szczegółowości kontekstu filtrów, rozwijając określony zestaw atrybutów wymiarów.


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

Scala określoną tabelę wymiarów (<code>dimensionSelector</code>) w kontekście filtrów modułu (<code>cube</code>) i zmienia wymiarowy poziom szczegółowości, rozwijając określony zestaw (<code>attributeNames</code>) atrybutów wymiarów. Atrybuty wymiarów są dodawane do widoku tabelarycznego z kolumnami o nazwie <code>newColumnNames</code> lub <code>attributeNames</code>, jeśli nie określono.



## Category
Cube
