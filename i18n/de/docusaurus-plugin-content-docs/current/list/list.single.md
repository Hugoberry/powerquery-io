---
title: List.Single
---

# List.Single


Gibt das Listenelement für eine Liste mit der Länge 1 zurück. Andernfalls wird ein Fehler ausgelöst.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Enthält die Liste „`list`“ nur ein Element, wird dieses zurückgegeben. Wenn mehrere Elemente vorhanden sind oder die Liste leer ist, löst die Funktion einen Fehler aus.


## Examples

### Example #1
Ermittelt den einzelnen Wert in der Liste "\{1\}".
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Ermittelt den einzelnen Wert in der Liste "\{1, 2, 3\}".
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
