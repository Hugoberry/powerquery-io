---
title: List.MinN
---

# List.MinN


Retorna os valores mínimos na lista. O número de valores a serem retornados ou a condição de filtragem podem ser especificados.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Retorna os valores mínimos na lista, `list`. O parâmetro `countOrCondition` especifica o número de valores a serem retornados ou uma condição de filtragem. O parâmetro opcional `comparisonCriteria` especifica como comparar valores na lista.

-   `list`: a lista de valores.
-   `countOrCondition`: se um número for especificado, uma lista de até `countOrCondition` itens em ordem crescente será retornada. Se uma condição for especificada, uma lista dos itens que atenderem inicialmente à condição será retornada. Quando um item não atender à condição, nenhum outro item será considerado. Se esse parâmetro for nulo, o menor valor na lista será retornado.
-   `comparisonCriteria`: *(Opcional)* Um valor de `comparisonCriteria` opcional pode ser especificado para determinar como comparar os itens na lista. Se esse parâmetro for nulo, o comparador padrão será usado.


## Examples

### Example #1
Localize os cinco menores valores da lista `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
