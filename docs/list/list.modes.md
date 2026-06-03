---
title: List.Modes
---

# List.Modes


Returns a list of the most frequent values in the list.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returns the items that appear most frequently in `list`. If the list is empty an error is raised. If multiple items appear with the same maximum frequency, all of them are returned. An optional comparison criteria value, `equationCriteria`, can be specified to control equality testing.


## Examples

### Example #1
Find the items that appears most frequently in the list `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
