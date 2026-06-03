---
title: List.Sum
---

# List.Sum


Devuelve la suma de los elementos de la lista.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Devuelve la suma de todos los valores que no son NULL de la lista `list`. Devuelve NULL si no hay valores no NULL en la lista.


## Examples

### Example #1
Buscar la suma de los números de la lista `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
