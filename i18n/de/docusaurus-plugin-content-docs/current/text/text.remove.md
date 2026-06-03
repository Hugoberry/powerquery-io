---
title: Text.Remove
---

# Text.Remove


Entfernt alle Vorkommen des angegebenen Zeichens oder der angegebenen Liste mit Zeichen aus dem Eingabetextwert.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Gibt eine Kopie des Textwerts "`text`" zurück, in der alle Zeichen aus "`removeChars`" entfernt wurden.


## Examples

### Example #1
Entfernt die Zeichen "," und ";" aus dem Textwert.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
