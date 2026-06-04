---
title: List.Reverse
---

# List.Reverse


Змінює порядок значень у списку.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Повертає список зі значеннями списку `list` у зворотному порядку.


## Examples

### Example #1
Створити список із \{1..10\} у зворотному порядку.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
