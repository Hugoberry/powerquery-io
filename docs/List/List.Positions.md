---
title: List.Positions
---

# List.Positions


Returns a list of offsets for the input.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Returns a list of offsets for the input list <code>list</code>.    When using List.Transform to change a list, the list of positions can be used to give the transform access to the position.


## Examples

### Example #1 
Find the offsets of values in the list \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
