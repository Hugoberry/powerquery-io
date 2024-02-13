---
title: List.RemoveRange
---

# List.RemoveRange


Removes count number of values starting at the specified position.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Removes <code>count</code> values in the <code>list</code> starting at the specified position, <code>index</code>.


## Examples

### Example #1 
Remove 3 values in the list \{1, 2, 3, 4, -6, -2, -1, 5} starting at index 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
