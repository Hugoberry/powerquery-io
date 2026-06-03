---
title: Text.Select
---

# Text.Select


Hiermit werden alle Vorkommen des angegebenen Zeichens oder einer Liste von Zeichen aus dem Eingabetextwert ausgewählt.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Gibt eine Kopie des Textwerts "`text`" zurück, in der alle nicht in "`selectChars`" enthaltenen Zeichen entfernt wurden.


## Examples

### Example #1
Wählen Sie aus dem Textwert alle Zeichen im Bereich von "a" bis "z" aus.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
