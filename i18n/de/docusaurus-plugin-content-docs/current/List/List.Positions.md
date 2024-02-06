---
title: List.Positions
---

# List.Positions


Gibt eine Liste mit Offsets für die Eingabe zurück.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Gibt eine Liste mit Offsets für die Eingabeliste "<code>list</code>" zurück.    Wird eine Liste mithilfe von "List.Transform" geändert, kann der Transformation über die Positionenliste der Zugriff auf die Position ermöglicht werden.


## Examples

### Example #1 
Ermittelt die Offsets der Werte in der Liste &#34;\{1, 2, 3, 4, null, 5}&#34;.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
