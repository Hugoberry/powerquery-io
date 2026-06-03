---
title: List.ReplaceRange
---

# List.ReplaceRange


Ersetzt die angegebene Anzahl von Werten ab einer bestimmten Position durch die Ersatzwerte.


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

Ersetzt `count` Werte in "`list`" ab der angegebenen Position (`index`) durch die Liste "`replaceWith`".


## Examples

### Example #1
Ersetzt "\{7, 8, 9\}" in der Liste "\{1, 2, 7, 8, 9, 5\}" durch "\{3, 4\}".
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
