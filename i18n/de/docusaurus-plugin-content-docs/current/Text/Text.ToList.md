---
title: Text.ToList
---

# Text.ToList


## Description

Gibt eine Liste mit Zeichenwerten auf der Grundlage des angegebenen Textwerts zurück.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Gibt eine Liste mit Zeichenwerten auf der Grundlage des angegebenen Textwerts (<code>text</code>) zurück.


## Examples

### Example #1 
Erstellt eine Liste mit Zeichenwerten auf der Grundlage des Texts &#34;Hello World&#34;.
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
