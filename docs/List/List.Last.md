---
title: List.Last
---

# List.Last


Returns the last value of the list or the specified default if empty.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Returns the last item in the list <code>list</code>, or the optional default value, <code>defaultValue</code>, if the list is empty.    If the list is empty and a default value is not specified, the function returns <code>null</code>.


## Examples

### Example #1 
Find the last value in the list \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Find the last value in the list \{} or -1 if it empty.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
