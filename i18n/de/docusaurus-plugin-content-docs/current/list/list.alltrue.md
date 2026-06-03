---
title: List.AllTrue
---

# List.AllTrue


Gibt "true" zurück, wenn alle Ausdrücke zutreffen.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Gibt "true" zurück, wenn alle Ausdrücke in der Liste "`list`" zutreffen.


## Examples

### Example #1
Ermittelt, ob alle Ausdrücke in der Liste "\{true, true, 2 > 0\}" zutreffen.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2
Ermittelt, ob alle Ausdrücke in der Liste "\{true, true, 2 &lt; 0\}" zutreffen.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
