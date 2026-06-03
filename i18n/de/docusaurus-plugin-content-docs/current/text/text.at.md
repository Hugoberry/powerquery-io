---
title: Text.At
---

# Text.At


Gibt das Zeichen an der angegebenen Position zurück.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Gibt das Zeichen im Textwert (`text`) an der Position `index` zurück. Das erste Zeichen im Text befindet sich an Position 0.


## Examples

### Example #1
Ermittelt das Zeichen an Position 4 in der Zeichenfolge "Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
