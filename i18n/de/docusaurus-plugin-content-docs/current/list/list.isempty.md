---
title: List.IsEmpty
---

# List.IsEmpty


Gibt "true" zurück, falls die Liste leer ist.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Gibt `true` zurück, falls die Liste "`list`" keine Werte enthält (also die Länge 0 besitzt). Enthält die Liste Werte (Länge > 0), wird `false` zurückgegeben.


## Examples

### Example #1
Ermittelt, ob die Liste "\{\}" leer ist.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Ermittelt, ob die Liste "\{1, 2\}" leer ist.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
