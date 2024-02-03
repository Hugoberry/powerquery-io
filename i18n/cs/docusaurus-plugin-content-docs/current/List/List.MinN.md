---
title: List.MinN
---

# List.MinN


## Description

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


## Details

Vrátí minimální hodnotu (hodnoty) v seznamu, <code>list</code>.    Parametr <code>countOrCondition</code> určuje počet hodnot, který se má vrátit, nebo podmínku filtrování. Volitelný parametr <code>comparisonCriteria</code> určuje, jak se mají porovnat hodnoty v seznamu. <ul>        <li> <code>list</code>: Seznam hodnot</li>        <li> <code>countOrCondition</code>: Pokud je zadáno číslo, je vrácen seznam až <code>countOrCondition</code> položek ve vzestupném pořadí. Pokud je zadána podmínka, vrátí se seznam všech položek, které splňují tuto podmínku. Pokud jakákoliv položka podmínku nesplňuje, nejsou již další položky po této položce zpracovány. Pokud má tento parametr hodnotu null, je vrácena jediná nejmenší hodnota v seznamu.</li><li><code>comparisonCriteria</code>: <i>[Optional]</i> Lze zadat volitelnou hodnotu <code>comparisonCriteria</code> a určit její pomocí způsob porovnání položek v seznamu. Pokud má parametr hodnotu null, použije se výchozí porovnávač. </li></ul>


## Examples

### Example #1 
Vyhledá 5 nejnižších hodnot v seznamu &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
