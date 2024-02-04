---
title: List.Transform
---

# List.Transform


## Description

Gibt eine neue Liste mit Werten zurück, die auf der Grundlage dieser Liste berechnet wurden.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Gibt durch Anwenden der Transformationsfunktion "<code>transform</code>" auf die Liste "<code>list</code>" eine neue Liste mit Werten zurück.


## Examples

### Example #1 
Addiert zu jedem Wert in der Liste &#34;\{1, 2}&#34; den Wert 1.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
