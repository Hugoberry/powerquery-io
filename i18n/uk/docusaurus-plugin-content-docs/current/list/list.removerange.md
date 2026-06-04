---
title: List.RemoveRange
---

# List.RemoveRange


Видаляє задану кількість значень, починаючи з указаної позиції.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Видаляє `count` значення у списку `list`, починаючи з указаної позиції, `index`.


## Examples

### Example #1
Видалити 3 значення у списку \{1, 2, 3, 4, -6, -2, -1, 5\}, починаючи з індексу 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
