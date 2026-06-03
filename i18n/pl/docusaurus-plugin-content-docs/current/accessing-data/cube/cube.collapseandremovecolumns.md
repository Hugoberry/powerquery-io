---
title: Cube.CollapseAndRemoveColumns
---

# Cube.CollapseAndRemoveColumns


Zmienia poziom szczegółowości kontekstu filtrów modułu, zwijając atrybuty zamapowane na określone kolumny.


## Syntax

```powerquery
Cube.CollapseAndRemoveColumns(
    cube as table,
    columnNames as list
) as table
```


## Remarks

Zmienia wymiarowy poziom szczegółowości kontekstu filtrów modułu `cube`, zwijając atrybuty zamapowane na określone kolumny `columnNames`. Te kolumny są także usuwane z widoku tabelarycznego modułu.



## Category
Cube
