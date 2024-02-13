---
title: List.First
---

# List.First


Returns the first value of the list or the specified default if empty.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Returns the first item in the list <code>list</code>, or the optional default value, <code>defaultValue</code>, if the list is empty.    If the list is empty and a default value is not specified, the function returns <code>null</code>.


## Examples

### Example #1 
Find the first value in the list \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Find the first value in the list \{}. If the list is empty, return -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
