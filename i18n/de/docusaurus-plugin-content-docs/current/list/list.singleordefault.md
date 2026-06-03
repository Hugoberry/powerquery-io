---
title: List.SingleOrDefault
---

# List.SingleOrDefault


Gibt das Listenelement für eine Liste mit der Länge 1 zurück. Ist die Liste leer, wird der Standardwert zurückgegeben.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

Enthält die Liste "`list`" nur ein Element, wird dieses zurückgegeben. Ist die Liste leer, gibt die Funktion NULL zurück, sofern kein optionaler Wert (`default`) angegeben wurde. Enthält die Liste mehrere Elemente, gibt die Funktion einen Fehler zurück.


## Examples

### Example #1
Ermittelt den einzelnen Wert in der Liste "\{1\}".
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2
Ermittelt den einzelnen Wert in der Liste "\{\}".
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3
Ermittelt den einzelnen Wert in der Liste "\{\}". Ist die Liste leer, wird "1" zurückgegeben.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
