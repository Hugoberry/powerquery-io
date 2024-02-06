---
title: List.Reverse
---

# List.Reverse


Reverses the order of values in the list.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Returns a list with the values in the list <code>list</code> in reversed order.


## Examples

### Example #1 
Create a list from \{1..10} in reverse order.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
