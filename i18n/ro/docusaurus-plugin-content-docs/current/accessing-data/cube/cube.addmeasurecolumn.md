---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Adaugă o coloană la cubul ce conţine rezultatele măsurii aplicate în contextul rând al fiecărui rând.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Adaugă o coloană cu numele `column` la `cube` ce conţine rezultatele măsurii `measureSelector` aplicate în contextul rând al fiecărui rând. Aplicarea măsurii este afectată de modificările la granularitatea dimensiunii sau la slicing. Valorile măsurii vor fi ajustate după efectuarea anumitor operaţiuni în cub.



## Category
Cube
