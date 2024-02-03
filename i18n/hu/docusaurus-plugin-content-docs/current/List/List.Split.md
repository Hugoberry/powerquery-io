---
title: List.Split
---

# List.Split


## Description

Több listából álló listára osztja fel a megadott listát a megadott oldalméret használatával.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Több listából álló listára osztja fel a(z) <code>list</code> elemet, ahol a kimeneti lista első eleme egy, a forráslista első <code>pageSize</code> elemét   tartalmazó lista, a következő eleme egy, a forráslista következő <code>pageSize</code> elemét tartalmazó lista, stb.



## Category
List.Transformation functions
