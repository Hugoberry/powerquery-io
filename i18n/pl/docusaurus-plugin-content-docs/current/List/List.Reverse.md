---
title: List.Reverse
---

# List.Reverse


Odwraca kolejność wartości na liście.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Zwraca listę zawierającą wartości z listy <code>list</code> ułożone w odwrotnej kolejności.


## Examples

### Example #1 
Utwórz listę zawierającą wartości z listy \{1..10} ułożone w odwrotnej kolejności.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
