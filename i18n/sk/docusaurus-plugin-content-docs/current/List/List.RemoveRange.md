---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Odstráni počet hodnôt, počnúc od stanovenej pozície.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Odstráni počet hodnôt: <code>count</code> v zozname <code>list</code>, počnúc od stanovenej pozície <code>index</code>.


## Examples

### Example #1 
Odstráňte 3 hodnoty v zozname \{1, 2, 3, 4, -6, -2, -1, 5}, počnúc indexom 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
