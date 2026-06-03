---
title: List.Mode
---

# List.Mode


Returns the most frequent value in the list.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Returns the item that appears most frequently in `list`. If the list is empty an error is raised. If multiple items appear with the same maximum frequency, the last one is chosen. An optional comparison criteria value, `equationCriteria`, can be specified to control equality testing.


## Examples

### Example #1
Find the item that appears most frequently in the list `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Find the item that appears most frequently in the list `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
