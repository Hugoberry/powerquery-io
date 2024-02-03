---
title: List.Select
---

# List.Select


## Description

Returns a list of values that match the condition.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Returns a list of values from the list <code>list</code>, that match the selection condition <code>selection</code>.


## Examples

### Example #1 
Find the values in the list \{1, -3, 4, 9, -2} that are greater than 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
