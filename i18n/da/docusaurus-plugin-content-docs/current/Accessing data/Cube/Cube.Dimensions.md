---
title: Cube.Dimensions
---

# Cube.Dimensions


Returnerer en tabel, der indeholder sættet af tilgængelige dimensioner.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Remarks

Returnerer en tabel, der indeholder sættet af tilgængelige dimensioner i <code>cube</code>. De enkelte dimensioner er en tabel, der indeholder et sæt dimensionsattributter, og de enkelte dimensionsattributter vises som en kolonne i dimensionstabellen. Dimensioner kan udvides i kuben ved hjælp af Cube.AddAndExpandDimensionColumn. 



## Category
Cube
