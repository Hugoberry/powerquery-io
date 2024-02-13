---
title: List.PositionOfAny
---

# List.PositionOfAny


Returns the first offset of a value in a list.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Returns the offset in list <code>list</code> of the first occurrence of a value in a list <code>values</code>. Returns -1 if no occurrence is found.    An optional occurrence parameter <code>occurrence</code> can be specified.<ul>   <li><code>occurrence</code>: The maximum number of occurrences that can be returned.</li></ul>


## Examples

### Example #1 
Find the first position in the list \{1, 2, 3} at which the value 2 or 3 appears.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
