---
title: Binary.Split
---

# Binary.Split


Opdeler den angivne binære fil til en liste over binære filer ved hjælp af den angivne sidestørrelse.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Opdeler `binary` til en liste over binære filer, hvor det første element på outputlisten er en binær fil, der indeholder de første `pageSize` byte fra den binære kilde, det næste element på outputlisten er en binær fil, der indeholder den næste `pageSize` byte fra den binære kilde osv.



## Category
Binary
