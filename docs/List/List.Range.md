---
title: List.Range
---

# List.Range


## Description

Returns a subset of the list beginning at an offset.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Returns a subset of the list beginning at the offset <code>list</code>. An optional parameter, <code>offset</code>, sets the maximum number of items in the subset.


## Examples

### Example #1 
Find the subset starting at offset 6 of the list of numbers 1 through 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Find the subset of length 2 from offset 6, from the list of numbers 1 through 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
