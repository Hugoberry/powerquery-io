---
title: List.First
---

# List.First


Gibt den ersten Wert der Liste zurück. Ist die Liste leer, wird der angegebene Standardwert zurückgegeben.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Gibt das erste Element in der Liste "`list`" zurück. Ist die Liste leer, wird der optionale Standardwert "`defaultValue`" zurückgegeben. Ist die Liste leer und kein Standardwert angegeben, gibt die Funktion `null` zurück.


## Examples

### Example #1
Ermittelt den ersten Wert in der Liste "\{1, 2, 3\}".
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Ermittelt den ersten Wert in der Liste "\{\}". Ist die Liste leer, wird "-1" zurückgegeben.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
