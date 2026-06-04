---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


U kocku dodaje kolonu koja sadrži rezultate mere primenjene u kontekstu reda za svaki red.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Dodaje kolonu pod nazivom `column` u `cube`, gde se nalaze rezultati mere `measureSelector` primenjene u kontekstu reda za svaki red. Na primenu mere utiču promene dimenzione granularnosti i isecanja. Vrednosti mere će biti izmenjene nakon određenih operacija kocke.



## Category
Cube
