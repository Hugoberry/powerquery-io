---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Adaugă o coloană la cubul ce conţine rezultatele măsurii aplicate în contextul rând al fiecărui rând.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Adaugă o coloană cu numele <code>column</code> la <code>cube</code> ce conţine rezultatele măsurii <code>measureSelector</code> aplicate în contextul rând al fiecărui rând. Aplicarea măsurii este afectată de modificările la granularitatea dimensiunii sau la slicing. Valorile măsurii vor fi ajustate după efectuarea anumitor operaţiuni în cub.



## Category
Cube
