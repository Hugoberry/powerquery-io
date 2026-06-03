---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


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


## Remarks

Scala określoną tabelę wymiarów, `dimensionSelector`, z kontekstem filtra `cube` i zmienia wymiarowy poziom szczegółowości poprzez rozszerzenie określonego zestawu atrybutów wymiarów, `attributeNames`. Atrybuty wymiarów są dodawane do widoku tabelarycznego z kolumnami o nazwie `newColumnNames` lub `attributeNames`, jeśli nie zostały określone.



## Category
Cube
