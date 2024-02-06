---
title: List.Positions
---

# List.Positions


Zwraca listę przesunięć wartości wejściowej.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Zwraca listę przesunięć wejściowej listy <code>list</code>.    Gdy w celu zmiany listy jest używana funkcja List.Transform, można użyć listy pozycji, aby umożliwić funkcji przekształcenia dostęp do odpowiedniej pozycji.


## Examples

### Example #1 
Znajdź przesunięcia wartości na liście \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
