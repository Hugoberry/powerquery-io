---
title: List.PositionOf
---

# List.PositionOf


Returns the offset(s) of a value in a list.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Returns the offset at which the value <code>value</code> appears in the list <code>list</code>. Returns -1 if the value doesn't appear.    An optional occurrence parameter <code>occurrence</code> can be specified.<ul>   <li><code>occurrence</code>: The maximum number of occurrences to report.</li></ul>


## Examples

### Example #1 
Find the position in the list \{1, 2, 3} at which the value 3 appears.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
