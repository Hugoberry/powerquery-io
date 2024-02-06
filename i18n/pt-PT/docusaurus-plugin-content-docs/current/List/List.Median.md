---
title: List.Median
---

# List.Median


Devolve o valor mediano da lista.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Devolve o item mediano da lista <code>list</code>. Esta função devolve <code>null</code> se a lista não contiver valores não <code>null</code>.     Se existir um número par de itens, a função escolhe o menor dos dois itens medianos, a menos que a lista seja    constituída inteiramente por datetimes, durações, números ou horas, e neste caso devolve a média dos dois itens.


## Examples

### Example #1 
Determinar o mediano da lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
