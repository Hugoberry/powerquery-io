---
title: List.Sort
---

# List.Sort


Seřadí seznam dat podle zadaných kritérií.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Seřadí seznam dat `list` podle zadaných volitelných kritérií. Jako kritérium porovnání se dá zadat volitelný parametr `comparisonCriteria`. Ten může mít tyto hodnoty:

-   K určení pořadí může být kritérium porovnání hodnota výčtu Order. (`Order.Descending`, `Order.Ascending`).
-   K vypočítání klíče, který bude použit k řazení, se dá použít funkce s jedním argumentem.
-   K výběru klíče a určení pořadí se dá jako kritérium porovnání zadat seznam obsahující klíč a pořadí (`{each 1 / _, Order.Descending}`).
-   K úplnému řízení porovnávání lze použít funkci se 2 argumenty (například Value.Compare). Této funkci se předají dvě položky ze seznamu (libovolné dvě položky v libovolném pořadí). Funkce by měla vrátit jednu z následujících hodnot:
    -   `-1`: První položka je menší než druhá položka.
    -   `0`: Položky jsou shodné.
    -   `1`: První položka je větší než druhá položka.


## Examples

### Example #1
Seřadí seznam \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Seřadí seznam \{2, 3, 1\} v sestupném pořadí.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Seřadí seznam \{2, 3, 1\} v sestupném pořadí pomocí metody Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
