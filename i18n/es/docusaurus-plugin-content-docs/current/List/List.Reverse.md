---
title: List.Reverse
---

# List.Reverse


## Description

Revierte el orden de valores de la lista.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Devuelve una lista con los valores de la lista <code>list</code> en orden inverso.


## Examples

### Example #1 
Crear una lista de \{1..10} en orden inverso.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
