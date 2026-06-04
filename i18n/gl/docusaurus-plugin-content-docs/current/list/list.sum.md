---
title: List.Sum
---

# List.Sum


Devolve a suma dos elementos da lista.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Devolve a suma dos valores non nulos da lista, `list`. Devolve nulo se non hai valores non nulos na lista.


## Examples

### Example #1
Buscar a suma dos números da lista `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
