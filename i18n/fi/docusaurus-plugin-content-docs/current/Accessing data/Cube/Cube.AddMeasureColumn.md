---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Lisää sarakkeen kuutioon, joka sisältää sen mittayksikön tulokset, jota on käytetty kunkin rivin rivikontekstissa.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Lisää sarakkeen nimeltä <code>column</code> kuutioon <code>cube</code>, joka sisältää sen mittayksikön <code>measureSelector</code> tulokset, jota on käytetty kunkin rivin rivikontekstissa. Dimension askelvälin ja leikkauksen muutokset vaikuttavat mittaussovellukseen. Mitta-arvoja säädetään tiettyjen kuutiotoimintojen suorituksen jälkeen.



## Category
Cube
