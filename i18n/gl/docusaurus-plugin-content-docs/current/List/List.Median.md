---
title: List.Median
---

# List.Median


## Description

Devolve o valor da mediana da lista.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Devolve o elemento da mediana da lista <code>list</code>. Esta función devolve <code>null</code> se a lista non contén ningún valor que non sexa <code>null</code>.    Se hai un número par de elementos, a función escolle o menor dos dous elementos da mediana, a non ser que a lista se    compoña por completo de valores dataHora, duracións, números ou horas; neste caso, devolve a media dos dous elementos.


## Examples

### Example #1 
Buscar o elemento da mediana da lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
