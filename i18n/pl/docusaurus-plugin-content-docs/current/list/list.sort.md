---
title: List.Sort
---

# List.Sort


Sortuje listę danych zgodnie z określonymi kryteriami.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Sortuje listę danych `list`, zgodnie z określonymi opcjonalnymi kryteriami. Opcjonalny parametr, `comparisonCriteria`, można określić jako kryterium porównania. Ten parametr może przyjmować następujące wartości:

-   Aby kontrolować kolejność, można jako kryterium porównania użyć wartości wyliczenia Order. (`Order.Descending`, `Order.Ascending`).
-   Aby obliczyć klucz używany do sortowania, można użyć funkcji składającej się z 1 argumentu.
-   Aby wybrać klucz i kontrolować kolejność, kryterium porównania może być listą zawierającą klucz i kolejność (`{each 1 / _, Order.Descending}`).
-   Aby całkowicie kontrolować porównanie, można użyć funkcji składającej się z 2 argumentów (np. Value.Compare). Funkcja otrzyma dwa elementy z listy (dowolne dwa elementy, w dowolnej kolejności). Funkcja powinna zwrócić jedną z następujących wartości:
    -   `-1`: pierwszy element jest mniej niż drugi.
    -   `0`: elementy są równe.
    -   `1`: pierwszy element jest większy od drugiego.


## Examples

### Example #1
Posortuj listę \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Posortuj listę \{2, 3, 1\} w kolejności malejącej.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Posortuj listę \{2, 3, 1\} w kolejności malejącej, używając metody Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
