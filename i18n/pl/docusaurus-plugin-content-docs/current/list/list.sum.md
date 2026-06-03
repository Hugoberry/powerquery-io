---
title: List.Sum
---

# List.Sum


Zwraca sumę elementów na liście.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Zwraca sumę wartości innych niż null z listy `list`. Zwraca wartość null, jeśli na liście nie znajdują się wartości inne niż null.


## Examples

### Example #1
Znajdź sumę liczb na liście `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
