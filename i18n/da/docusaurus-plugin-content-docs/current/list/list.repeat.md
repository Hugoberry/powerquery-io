---
title: List.Repeat
---

# List.Repeat


Returnerer en liste, der tæller gentagelser på den oprindelige liste.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Returnerer en liste, der indeholder `count` gentagelser fra den oprindelige liste, `list`.


## Examples

### Example #1
Opret en liste, hvor \{1, 2\} gentages 3 gange.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
