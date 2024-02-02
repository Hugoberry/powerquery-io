---
title: List.Distinct
---

# List.Distinct


## Description

Returns a list of values with duplicates removed.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Returns a list that contains all the values in list <code>list</code> with duplicates removed. If the list is empty, the result is an empty list.


## Examples

### Example #1 
Remove the duplicates from the list \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
