---
title: List.Intersect
---

# List.Intersect


## Description

Returns the intersection of the list values found in the input.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Returns the intersection of the list values found in the input list <code>lists</code>. An optional parameter, <code>equationCriteria</code>, can be specified.


## Examples

### Example #1 
Find the intersection of the lists \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
