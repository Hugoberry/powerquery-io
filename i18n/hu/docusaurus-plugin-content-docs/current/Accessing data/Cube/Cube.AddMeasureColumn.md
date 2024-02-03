---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Oszlopot ad hozzá az egyes sorok sorkörnyezetében alkalmazott mérték eredményeit tartalmazó kockához.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

<code>column</code> nevű oszlopot ad hozzá az egyes sorok sorkörnyezetében alkalmazott <code>cube</code> mérték eredményeit tartalmazó <code>measureSelector</code> kockához. A mérték alkalmazására hatással vannak a dimenziógranularitás és a felosztás változásai. A mértékek értéke módosulni fog az egyes kockaműveletek végrehajtása után.



## Category
Cube
