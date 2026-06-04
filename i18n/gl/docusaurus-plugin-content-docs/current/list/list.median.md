---
title: List.Median
---

# List.Median


Devolve o valor da mediana da lista.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Devolve o elemento da mediana da lista `list`. Esta función devolve `null` se a lista non contén ningún valor que non sexa `null`. Se hai un número par de elementos, a función escolle o menor dos dous elementos da mediana, a non ser que a lista se compoña por completo de valores dataHora, duracións, números ou horas; neste caso, devolve a media dos dous elementos.


## Examples

### Example #1
Buscar o elemento da mediana da lista `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
