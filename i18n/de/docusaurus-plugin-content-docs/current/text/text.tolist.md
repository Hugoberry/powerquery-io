---
title: Text.ToList
---

# Text.ToList


Gibt eine Liste mit Zeichenwerten auf der Grundlage des angegebenen Textwerts zurück.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Gibt eine Liste mit Zeichenwerten auf der Grundlage des angegebenen Textwerts (`text`) zurück.


## Examples

### Example #1
Erstellt eine Liste mit Zeichenwerten auf der Grundlage des Texts "Hello World".
```powerquery
Text.ToList("Hello World")
```

Result: 
```powerquery
{
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d"
}
```




## Category
Text.Conversions from and to text
