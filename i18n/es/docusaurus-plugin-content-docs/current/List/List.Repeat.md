---
title: List.Repeat
---

# List.Repeat


## Description

Devuelve una lista que un recuento de repeticiones de la lista original.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Devuelve una lista que <code>count</code> repeticiones de la lista original, <code>list</code>.


## Examples

### Example #1 
Crear una lista que tenga \{1, 2} repetido 3 veces.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
