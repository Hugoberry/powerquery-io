---
title: List.Min
---

# List.Min


## Description

Returns the minimum value or the default value for an empty list.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Returns the minimum item in the list <code>list</code>, or the optional default value <code>default</code> if the list is empty.    An optional comparisonCriteria value, <code>comparisonCriteria</code>, may be specified to determine how to compare the items in the list. If this parameter is null, the default comparer is used.


## Examples

### Example #1 
Find the min in the list \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Find the min in the list \{} or return -1 if it is empty. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
