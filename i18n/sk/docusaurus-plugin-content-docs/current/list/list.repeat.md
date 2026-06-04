---
title: List.Repeat
---

# List.Repeat


Vráti zoznam, ktorý je opakovaním počtu pôvodného zoznamu.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Vráti zoznam, ktorý je opakovaním počtu `count` pôvodného zoznamu `list`.


## Examples

### Example #1
Vytvorte zoznam, v ktorom sa 3-krát opakuje zoznam \{1, 2\}.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
