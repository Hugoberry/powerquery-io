---
title: List.Contains
---

# List.Contains


## Description

Wskazuje, czy lista zawiera wartość.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Wskazuje, czy lista <code>list</code> zawiera wartość <code>value</code>.    Zwraca wartość true, jeśli wartość zostanie znaleziona na liście; w przeciwnym razie zwraca wartość false. W celu sterowania sprawdzaniem równości można określić opcjonalną wartość kryterium równości <code>equationCriteria</code>. 


## Examples

### Example #1 
Sprawdź, czy lista \{1, 2, 3, 4, 5} zawiera wartość 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Sprawdź, czy lista \{1, 2, 3, 4, 5} zawiera wartość 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
