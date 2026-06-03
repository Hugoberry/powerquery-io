---
title: List.RemoveRange
---

# List.RemoveRange


Entfernt die angegebene Anzahl von Werten ab der angegebenen Position.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Entfernt `count` Werte ab der angegebenen Position (`index`) aus "`list`".


## Examples

### Example #1
Entfernt drei Werte ab Index 4 aus der Liste "\{1, 2, 3, 4, -6, -2, -1, 5\}".
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
