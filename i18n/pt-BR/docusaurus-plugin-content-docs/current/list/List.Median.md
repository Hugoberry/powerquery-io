---
title: List.Median
---

# List.Median


Retorna o valor mediano da lista.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Retorna o item mediano da lista <code>list</code>. Essa função retorna <code>null</code> caso a lista não contenha nenhum valor não <code>null</code>.    Se houver um número par de itens, a função escolherá o menor dos dois itens medianos, a menos que a lista seja    constituída inteiramente de datas e horas, durações, números ou os horários, caso em que ela retornará uma média dos dois itens.


## Examples

### Example #1 
Localize o item mediano da lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
