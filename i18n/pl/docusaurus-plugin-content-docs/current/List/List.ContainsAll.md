---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Wskazuje, czy lista zawiera wszystkie wartości z innej listy.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Wskazuje, czy lista <code>list</code> zawiera wszystkie wartości z innej listy (<code>values</code>).    Zwraca wartość true, jeśli wartość zostanie znaleziona na liście; w przeciwnym razie zwraca wartość false. W celu sterowania sprawdzaniem równości można określić opcjonalną wartość kryterium równości <code>equationCriteria</code>. 


## Examples

### Example #1 
Sprawdź, czy lista \{1, 2, 3, 4, 5} zawiera wartości 3 i 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Sprawdź, czy lista \{1, 2, 3, 4, 5} zawiera wartości 5 i 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
