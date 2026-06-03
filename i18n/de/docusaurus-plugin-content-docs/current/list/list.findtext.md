---
title: List.FindText
---

# List.FindText


Gibt eine Liste mit Werten (einschließlich Datensatzfelder) zurück, die den angegebenen Text enthalten.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Gibt eine Liste mit den Werten aus der Liste "`list`" zurück, die den Wert "`text`" enthalten.


## Examples

### Example #1
Ermittelt die Textwerte in der Liste "\{"a", "b", "ab"\}", die den Wert "a" enthalten.
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
