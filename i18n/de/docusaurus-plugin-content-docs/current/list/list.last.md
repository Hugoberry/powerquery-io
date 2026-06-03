---
title: List.Last
---

# List.Last


Gibt den letzten Wert der Liste zurück. Ist die Liste leer, wird der angegebene Standardwert zurückgegeben.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Gibt das letzte Element in der angegebenen Liste oder den optionalen Standardwert zurück, wenn die Liste leer ist.

-   `list`: Die zu untersuchende Liste.
-   `defaultValue`: (Optional) Der zurückzugebende Standardwert, wenn die Liste leer ist. Wenn die Liste leer ist und kein Standardwert angegeben wird, gibt die Funktion `null` zurück.


## Examples

### Example #1
Ermittelt den letzten Wert in der Liste "\{1, 2, 3\}".
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Ermittelt den letzten Wert in der Liste "\{\}". Ist die Liste leer, wird "-1" zurückgegeben.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
