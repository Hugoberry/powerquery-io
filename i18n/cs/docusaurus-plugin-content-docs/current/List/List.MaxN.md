---
title: List.MaxN
---

# List.MaxN


## Description

Vrátí maximální hodnotu (hodnoty) v seznamu. Je nutné zadat počet hodnot, který se má vrátit, nebo podmínku filtrování.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Vrátí maximální hodnotu (hodnoty) v seznamu, <code>list</code>.    Po seřazení parametrů lze zadat volitelné parametry a dále jejich pomocí filtrovat výsledky. Volitelný parametr <code>countOrCondition</code> určuje počet hodnot, který se má vrátit, nebo podmínku filtrování. Volitelný parametr <code>comparisonCriteria</code> určuje, jak se mají porovnat hodnoty v seznamu. <ul>        <li> <code>list</code>: Seznam hodnot</li>        <li> <code>countOrCondition</code>: Pokud je zadáno číslo, je vrácen seznam až <code>countOrCondition</code> položek ve vzestupném pořadí. Pokud je zadána podmínka, vrátí se seznam všech položek, které splňují tuto podmínku. Pokud jakákoliv položka podmínku nesplňuje, nejsou již další položky po této položce zpracovány.</li><li><code>comparisonCriteria</code>: <i>[Optional]</i> Lze zadat volitelnou hodnotu <code>comparisonCriteria</code> a určit její pomocí způsob porovnání položek v seznamu. Pokud má parametr hodnotu null, použije se výchozí porovnávač. </li></ul>



## Category
List.Ordering
