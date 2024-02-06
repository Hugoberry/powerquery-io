---
title: Text.End
---

# Text.End


Gibt die letzten Zeichen des Texts zurück.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Gibt einen <code>text</code>-Wert zurück, bei dem es sich um die letzten <code>count</code> Zeichen des <code>text</code>-Werts "<code>text</code>" handelt.


## Examples

### Example #1 
Ruft die letzten fünf Zeichen des Texts &#34;Hello, World&#34; ab.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
