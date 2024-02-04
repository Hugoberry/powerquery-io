---
title: Text.Start
---

# Text.Start


## Description

Gibt den Beginn des Texts zurück.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Gibt die ersten <code>count</code> Zeichen von "<code>text</code>" als Textwert zurück.


## Examples

### Example #1 
Ruft die ersten fünf Zeichen von &#34;Hello, World&#34; ab.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
