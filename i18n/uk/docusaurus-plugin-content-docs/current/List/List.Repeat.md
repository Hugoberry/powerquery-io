---
title: List.Repeat
---

# List.Repeat


## Description

Повертає список, який містить задану кількість повторень вихідного списку.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Повертає список, який містить <code>count</code> повторень вихідного списку, <code>list</code>.


## Examples

### Example #1 
Створити список, який містить 3 повторення \{1, 2}.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
