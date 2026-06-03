---
title: List.Sum
---

# List.Sum


Devolve a soma dos itens existentes na lista.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Devolve a soma dos valores não nulos existentes na lista, `list`. Devolve nulo se não existirem valores não nulos na lista.


## Examples

### Example #1
Determinar a soma dos números existentes na lista `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
