---
title: List.Sum
---

# List.Sum


Retorna a soma dos itens na lista.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Retorna a soma dos valores não nulos na lista, `list`. Retornará um valor nulo se não houver valores não nulos na lista.


## Examples

### Example #1
Localize a soma dos números na lista `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
