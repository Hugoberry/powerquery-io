---
title: List.PositionOf
---

# List.PositionOf


Zwraca przesunięcia wartości na liście.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Zwraca przesunięcie, przy którym wartość <code>value</code> występuje na liście <code>list</code>. Zwraca -1, jeśli wartość nie występuje na tej liście.    Można określić opcjonalny parametr wystąpienia (<code>occurrence</code>).<ul>   <li><code>occurrence</code>: maksymalna liczba wystąpień, które mają być zgłaszane.</li></ul>


## Examples

### Example #1 
Znajdź pozycję na liście \{1, 2, 3}, na której znajduje się wartość 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
