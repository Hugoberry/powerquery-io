---
title: List.IsDistinct
---

# List.IsDistinct


Indicates whether there are duplicates in the list.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Returns a logical value whether there are duplicates in the list `list`; `true` if the list is distinct, `false` if there are duplicate values.


## Examples

### Example #1
Find if the list \{1, 2, 3\} is distinct (i.e. no duplicates).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Find if the list \{1, 2, 3, 3\} is distinct (i.e. no duplicates).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
