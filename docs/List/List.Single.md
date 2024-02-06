---
title: List.Single
---

# List.Single


Returns the one list item for a list of length one, otherwise throws an exception.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

If there is only one item in the list <code>list</code>, returns that item.    If there is more than one item or the list is empty, the function throws an exception.


## Examples

### Example #1 
Find the single value in the list \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Find the single value in the list \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
