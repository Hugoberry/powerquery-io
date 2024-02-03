---
title: Binary.Split
---

# Binary.Split


## Description

Opdeler den angivne binære fil til en liste over binære filer ved hjælp af den angivne sidestørrelse.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Opdeler <code>binary</code> til en liste over binære filer, hvor det første element på outputlisten er en binær fil, der indeholder de første <code>pageSize</code> byte fra den binære kilde, det næste element på outputlisten er en binær fil, der indeholder den næste <code>pageSize</code> byte fra den binære kilde osv.



## Category
Binary
