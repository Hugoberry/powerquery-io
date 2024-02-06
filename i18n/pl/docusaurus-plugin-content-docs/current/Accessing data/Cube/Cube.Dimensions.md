---
title: Cube.Dimensions
---

# Cube.Dimensions


Zwraca tabelę zawierającą zestaw dostępnych wymiarów.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Remarks

Zwraca tabelę zawierającą zestaw wymiarów dostępnych w module <code>cube</code>. Każdy wymiar to tabela zawierająca zestaw atrybutów wymiaru, a każdy atrybut wymiaru jest przedstawiony w postaci kolumny w tabeli wymiarów. Wymiary można rozwijać w module, używając funkcji Cube.AddAndExpandDimensionColumn. 



## Category
Cube
