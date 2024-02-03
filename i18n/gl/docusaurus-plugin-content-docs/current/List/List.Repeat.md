---
title: List.Repeat
---

# List.Repeat


## Description

Devolve unha lista que conta as repeticións da lista orixinal.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Devolve unha lista que ten <code>count</code> repeticións da lista orixinal, <code>list</code>.


## Examples

### Example #1 
Crear unha lista que ten \{1, 2} repetidos 3 veces.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
