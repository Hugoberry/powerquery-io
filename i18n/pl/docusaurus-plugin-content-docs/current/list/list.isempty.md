---
title: List.IsEmpty
---

# List.IsEmpty


Zwraca wartość true, jeśli lista jest pusta.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Zwraca wartość <code>true</code>, jeśli lista <code>list</code> nie zawiera wartości (ma długość 0). Jeśli lista zawiera wartości (długość większa od 0), zwraca wartość <code>false</code>.


## Examples

### Example #1 
Sprawdź, czy lista \{} jest pusta.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Sprawdź, czy lista \{1, 2} jest pusta.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
