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

Gibt das Zeichen im Textwert (<code>text</code>) an der Position <code>index</code> zurück. Das erste Zeichen im Text befindet sich an Position 0.


## Examples

### Example #1 
Ermittelt das Zeichen an Position 4 in der Zeichenfolge &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
