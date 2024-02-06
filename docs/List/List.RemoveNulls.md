---
title: List.RemoveNulls
---

# List.RemoveNulls


Removes all &#34;null&#34; values from the specified list.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Removes all occurrences of "null" values in the <code>list</code>. If there are no 'null' values in the list, the original list is returned.


## Examples

### Example #1 
Remove the &#34;null&#34; values from the list \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
