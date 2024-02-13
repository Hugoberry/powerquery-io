---
title: List.MatchesAny
---

# List.MatchesAny


Zwraca wartość true, jeśli dowolna wartość spełnia warunek określony przez funkcję warunku.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Zwraca wartość <code>true</code>, jeśli dowolna wartość z listy <code>list</code> spełnia warunek <code>condition</code> określony przez funkcję warunku; w przeciwnym razie zwraca wartość <code>false</code>.


## Examples

### Example #1 
Sprawdź, czy dowolna z wartości na liście \{9, 10, 11} jest większa niż 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Sprawdź, czy dowolna z wartości na liście \{1, 2, 3} jest większa niż 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
