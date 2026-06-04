---
title: List.RemoveItems
---

# List.RemoveItems


Видаляє елементи зі списку1, які присутні у списку.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Видаляє всі входження заданих значень у списку `list2` зі списку `list1`. Якщо значення списку `list2` не існують у списку `list1`, повертається вихідний список.


## Examples

### Example #1
Видалити елементи списку \{2, 4, 6\} зі списку \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
