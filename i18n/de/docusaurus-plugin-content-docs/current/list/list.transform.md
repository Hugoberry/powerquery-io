---
title: List.Transform
---

# List.Transform


Gibt eine neue Liste mit Werten zurück, die auf der Grundlage dieser Liste berechnet wurden.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Gibt durch Anwenden der Transformationsfunktion "`transform`" auf die Liste "`list`" eine neue Liste mit Werten zurück.


## Examples

### Example #1
Addiert zu jedem Wert in der Liste "\{1, 2\}" den Wert 1.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
