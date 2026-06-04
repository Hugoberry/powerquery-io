---
title: List.Repeat
---

# List.Repeat


Повертає список, який містить задану кількість повторень вихідного списку.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Повертає список, який містить `count` повторень вихідного списку, `list`.


## Examples

### Example #1
Створити список, який містить 3 повторення \{1, 2\}.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
