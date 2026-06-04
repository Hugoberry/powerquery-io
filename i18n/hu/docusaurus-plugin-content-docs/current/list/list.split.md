---
title: List.Split
---

# List.Split


Több listából álló listára osztja fel a megadott listát a megadott oldalméret használatával.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Több listából álló listára osztja fel a(z) `list` elemet, ahol a kimeneti lista első eleme egy, a forráslista első `pageSize` elemét tartalmazó lista, a következő eleme egy, a forráslista következő `pageSize` elemét tartalmazó lista, stb.



## Category
List.Transformation functions
