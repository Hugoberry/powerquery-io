---
title: List.Single
---

# List.Single


Gibt das Listenelement für eine Liste mit der Länge 1 zurück. Andernfalls wird eine Ausnahme ausgelöst.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Enthält die Liste "<code>list</code>" nur ein Element, wird dieses zurückgegeben.    Enthält die Liste mehrere oder gar keine Elemente, löst die Funktion eine Ausnahme aus.


## Examples

### Example #1 
Ermittelt den einzelnen Wert in der Liste &#34;\{1}&#34;.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Ermittelt den einzelnen Wert in der Liste &#34;\{1, 2, 3}&#34;.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
