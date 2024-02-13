---
title: List.Max
---

# List.Max


Returns the maximum value or the default value for an empty list.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Returns the maximum item in the list <code>list</code>, or the optional default value <code>default</code> if the list is empty.    An optional comparisonCriteria value, <code>comparisonCriteria</code>, may be specified to determine how to compare the items in the list. If this parameter is null, the default comparer is used.


## Examples

### Example #1 
Find the max in the list \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Find the max in the list \{} or return -1 if it is empty. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
