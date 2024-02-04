---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

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


## Details

Gibt das Ergebnis zurück, das entsteht, wenn eine Reihe von Zeichen (<code>count</code>) ab der Position <code>offset</code> aus dem Textwert "<code>text</code>" entfernt und anschließend der Textwert "<code>newText</code>" an der gleichen Position in "<code>text</code>" eingefügt wird.


## Examples

### Example #1 
Ersetzt ein einzelnes Zeichen an Position 2 des Textwerts &#34;ABGF&#34; durch den neuen Textwert &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
