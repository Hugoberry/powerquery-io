---
title: List.MinN
---

# List.MinN


Devolve o(s) valor(es) mínimo(s) existente(s) na lista. É possível especificar o número de valores a devolver ou a condição de filtragem.


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

Devolve o(s) valor(es) mínimo(s) na lista, `list`. O parâmetro `countOrCondition` especifica o número de valores a devolver ou uma condição de filtragem. O parâmetro opcional `comparisonCriteria` especifica como comparar valores na lista.

-   `list`: a lista de valores.
-   `countOrCondition`: se for especificado um número, é devolvida uma lista de até `countOrCondition` itens por ordem ascendente. Se for especificada uma condição, é devolvida uma lista de itens que cumprem inicialmente a condição. Assim que um item falhar a condição, não são considerados mais itens. Se este parâmetro for null, é devolvido o único valor mais pequeno da lista.
-   `comparisonCriteria`: *(opcional)* pode ser especificado um valor `comparisonCriteria` opcional para determinar como comparar os itens na lista. Se este parâmetro for null, é utilizado o comparador predefinido.


## Examples

### Example #1
Determinar os 5 valores menores na lista `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
