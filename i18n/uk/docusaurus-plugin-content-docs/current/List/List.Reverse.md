---
title: List.Reverse
---

# List.Reverse


## Description

Змінює порядок значень у списку.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Повертає список зі значеннями списку <code>list</code> у зворотному порядку.


## Examples

### Example #1 
Створити список із \{1..10} у зворотному порядку.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
