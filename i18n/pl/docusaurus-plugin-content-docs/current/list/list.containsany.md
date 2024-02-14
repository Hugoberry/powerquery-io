---
title: List.ContainsAny
---

# List.ContainsAny


Wskazuje, czy lista zawiera dowolną z wartości z innej listy.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Wskazuje, czy lista <code>list</code> zawiera dowolną z wartości z innej listy (<code>values</code>).        Zwraca wartość true, jeśli wartość zostanie znaleziona na liście; w przeciwnym razie zwraca wartość false. W celu sterowania sprawdzaniem równości można określić opcjonalną wartość kryterium równości <code>equationCriteria</code>. 


## Examples

### Example #1 
Sprawdź, czy lista \{1, 2, 3, 4, 5} zawiera wartość 3 lub 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Sprawdź, czy lista \{1, 2, 3, 4, 5} zawiera wartość 6 lub 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
