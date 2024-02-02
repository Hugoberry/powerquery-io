---
title: List.Union
---

# List.Union


## Description

Returns the union of the list values found in the input.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Takes a list of lists <code>lists</code>, unions the items in the individual lists and returns them in the output list. As a result, the returned list contains all items in any input lists.    This operation maintains traditional bag semantics, so duplicate values are matched as part of the Union.    An optional equation criteria value, <code>equationCriteria</code>, can be specified to control equality testing. 


## Examples

### Example #1 
Create a union of the list \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
