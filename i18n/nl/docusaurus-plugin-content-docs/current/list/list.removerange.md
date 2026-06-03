---
title: List.RemoveRange
---

# List.RemoveRange


Verwijdert het getelde aantal waarden, te beginnen bij de opgegeven positie.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Verwijdert `count` waarden in de `list`, te beginnen bij de opgegeven positie, `index`.


## Examples

### Example #1
Verwijdert drie waarden uit de lijst \{1, 2, 3, 4, -6, -2, -1, 5\}, te beginnen bij index 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
