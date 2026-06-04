---
title: List.Split
---

# List.Split


Deli navedenu listu na listu lista koristeći navedenu veličinu stranice.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Deli `list` na listu lista gde je prvi element izlazne liste lista koja sadrži prvih `pageSize`elemenata sa liste izvora, sledeći element izlazne liste je lista koja sadrži sledećih `pageSize`elemenata sa liste izvora, i tako dalje.



## Category
List.Transformation functions
