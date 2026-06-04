---
title: List.MinN
---

# List.MinN


Vrátí minimální hodnotu (hodnoty) v seznamu. Lze zadat počet hodnot, který se má vrátit, nebo podmínku filtrování.


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

Vrátí minimální hodnotu (hodnoty) v seznamu, `list`. Parametr `countOrCondition` určuje počet hodnot, který se má vrátit, nebo podmínku filtrování. Volitelný parametr `comparisonCriteria` určuje, jak se mají porovnat hodnoty v seznamu.

-   `list`: Seznam hodnot.
-   `countOrCondition`: Pokud je zadáno číslo, je vrácen seznam až `countOrCondition` položek ve vzestupném pořadí. Pokud je zadána podmínka, vrátí se seznam všech položek, které splňují tuto podmínku. Pokud jakákoliv položka podmínku nesplňuje, nejsou již další položky po této položce zpracovány. Pokud má tento parametr hodnotu null, je vrácena jediná nejmenší hodnota v seznamu.
-   `comparisonCriteria`: *(Volitelné)* Volitelnou hodnotu `comparisonCriteria` lze zadat k určení způsobu porovnání položek v seznamu. Pokud má parametr hodnotu null, použije se výchozí porovnávač.


## Examples

### Example #1
Vyhledá 5 nejnižších hodnot v seznamu `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
