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

Retorna o item mediano da lista `list`. Essa função retorna `null` caso a lista não contenha nenhum valor não `null`. Se houver um número par de itens, a função escolherá o menor dos dois itens medianos, a menos que a lista seja constituída inteiramente de datas e horas, durações, números ou os horários, caso em que ela retornará uma média dos dois itens.


## Examples

### Example #1
Localize o item mediano da lista `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
