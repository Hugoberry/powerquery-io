---
title: List.RemoveItems
---

# List.RemoveItems


Entfernt in der Liste vorhandene Elemente aus "list1".


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Entfernt alle Vorkommen der angegebenen Werte in "`list2`" aus "`list1`". Sind die Werte aus "`list2`" in "`list1`" nicht vorhanden, wird die ursprüngliche Liste zurückgegeben.


## Examples

### Example #1
Entfernt die Elemente in der Liste "\{2, 4, 6\}" aus der Liste "\{1, 2, 3, 4, 2, 5, 5\}".
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
