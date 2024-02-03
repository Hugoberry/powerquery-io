---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Zwraca pierwsze przesunięcie wartości na liście.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Zwraca przesunięcie na liście <code>list</code> pierwszego wystąpienia wartości z listy <code>values</code>. Jeśli nie zostanie znalezione wystąpienie tej wartości, zwraca -1.    Można określić opcjonalny parametr wystąpienia (<code>occurrence</code>).<ul>   <li><code>occurrence</code>: maksymalna liczba wystąpień, które można zwrócić.</li></ul>


## Examples

### Example #1 
Znajdź pierwszą pozycję na liście \{1, 2, 3}, na której znajduje się wartość 2 lub 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
