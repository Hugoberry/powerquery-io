---
title: List.Repeat
---

# List.Repeat


## Description

Returns a list that is count repetitions of the original list.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Returns a list that is <code>count</code> repetitions of the original list, <code>list</code>.


## Examples

### Example #1 
Create a list that has \{1, 2} repeated 3 times.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
