---
title: List.Intersect
---

# List.Intersect


Tiek atgriezts ievades sarakstu vērtību krustpunkts.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Tiek atgriezts ievades sarakstā `lists` ietverto sarakstu vērtību krustpunkts. Varat norādīt papildu parametru `equationCriteria`.


## Examples

### Example #1
Iegūstiet sarakstu \{1..5\}, \{2..6\} un \{3..7\} krustpunktu.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
