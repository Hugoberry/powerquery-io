---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

U kocku dodaje kolonu koja sadrži rezultate mere primenjene u kontekstu reda za svaki red.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Dodaje kolonu pod nazivom <code>column</code> u <code>cube</code>, gde se nalaze rezultati mere <code>measureSelector</code> primenjene u kontekstu reda za svaki red. Na primenu mere utiču promene dimenzione granularnosti i isecanja. Vrednosti mere će biti izmenjene nakon određenih operacija kocke.



## Category
Cube
