---
title: List.Split
---

# List.Split


Opdeler den angivne liste til en liste med lister ved hjælp af den angivne sidestørrelse.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Opdeler `list` til en liste med lister, hvor det første element på outputlisten er en liste, der indeholder de første `pageSize` elementer fra kildelisten. Det næste element på outputlisten er en liste, der indeholder de næste `pageSize` elementer fra kildelisten osv.



## Category
List.Transformation functions
