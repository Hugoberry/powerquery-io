---
title: List.AnyTrue
---

# List.AnyTrue


Gibt "true" zurück, wenn ein beliebiger Ausdruck zutrifft.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Gibt "true" zurück, wenn ein beliebiger Ausdruck in der Liste "`list`" zutrifft.


## Examples

### Example #1
Ermittelt, ob einer der Ausdrücke in der Liste "\{true, false, 2 > 0\}" zutrifft.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2
Ermittelt, ob einer der Ausdrücke in der Liste "\{2 = 0, false, 2 &lt; 0\}" zutrifft.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
