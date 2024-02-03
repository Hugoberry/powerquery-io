---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Видаляє задану кількість значень, починаючи з указаної позиції.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Видаляє <code>count</code> значення у списку <code>list</code>, починаючи з указаної позиції, <code>index</code>.


## Examples

### Example #1 
Видалити 3 значення у списку \{1, 2, 3, 4, -6, -2, -1, 5}, починаючи з індексу 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
