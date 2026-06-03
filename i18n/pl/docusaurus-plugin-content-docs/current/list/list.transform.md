---
title: List.Transform
---

# List.Transform


Zwraca nową listę wartości obliczonych na podstawie tej listy.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Zwraca nową listę wartości, stosując funkcję przekształcenia `transform` do listy `list`.


## Examples

### Example #1
Dodaj 1 do każdej wartości na liście \{1, 2\}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
