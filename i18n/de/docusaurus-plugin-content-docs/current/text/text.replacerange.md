---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Entfernt an einer angegebenen Position einen Bereich von Zeichen und fügt einen neuen Wert ein.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Gibt das Ergebnis zurück, das entsteht, wenn eine Reihe von Zeichen (`count`) ab der Position `offset` aus dem Textwert "`text`" entfernt und anschließend der Textwert "`newText`" an der gleichen Position in "`text`" eingefügt wird.


## Examples

### Example #1
Ersetzt ein einzelnes Zeichen an Position 2 des Textwerts "ABGF" durch den neuen Textwert "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
