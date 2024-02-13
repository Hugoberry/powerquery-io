---
title: List.Repeat
---

# List.Repeat


Zwraca listę zawierającą liczbę powtórzeń oryginalnej listy.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Zwraca listę zawierającą <code>count</code> powtórzeń oryginalnej listy <code>list</code>.


## Examples

### Example #1 
Utwórz listę, na której 3 razy będzie powtórzona lista \{1, 2}.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
