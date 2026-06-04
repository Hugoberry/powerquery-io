---
title: List.Repeat
---

# List.Repeat


Devolve unha lista que conta as repeticións da lista orixinal.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Devolve unha lista que ten `count` repeticións da lista orixinal, `list`.


## Examples

### Example #1
Crear unha lista que ten \{1, 2\} repetidos 3 veces.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
