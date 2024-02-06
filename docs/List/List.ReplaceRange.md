---
title: List.ReplaceRange
---

# List.ReplaceRange


Replaces count number of values starting at position with the replacement values.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Remarks

Replaces <code>count</code> values in the <code>list</code> with the list <code>replaceWith</code>, starting at specified position, <code>index</code>.


## Examples

### Example #1 
Replace \{7, 8, 9} in the list \{1, 2, 7, 8, 9, 5} with \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
