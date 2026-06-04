---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Oszlopot ad hozzá az egyes sorok sorkörnyezetében alkalmazott mérték eredményeit tartalmazó kockához.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

`column` nevű oszlopot ad hozzá az egyes sorok sorkörnyezetében alkalmazott `cube` mérték eredményeit tartalmazó `measureSelector` kockához. A mérték alkalmazására hatással vannak a dimenziógranularitás és a felosztás változásai. A mértékek értéke módosulni fog az egyes kockaműveletek végrehajtása után.



## Category
Cube
