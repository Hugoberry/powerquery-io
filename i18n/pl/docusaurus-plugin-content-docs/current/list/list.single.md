---
title: List.Single
---

# List.Single


Zwraca jeden element listy, jeśli lista ma długość 1; w przeciwnym razie zgłasza błąd.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Jeśli na liście `list` znajduje się tylko jeden element, zwraca ten element. Jeśli na liście znajduje się więcej niż jeden element lub lista jest pusta, funkcja zgłasza błąd.


## Examples

### Example #1
Znajdź pojedynczą wartość na liście \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Znajdź pojedynczą wartość na liście \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
