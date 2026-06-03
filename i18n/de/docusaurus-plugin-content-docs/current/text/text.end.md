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

Gibt einen `text`\-Wert zurück, bei dem es sich um die letzten `count` Zeichen des `text`\-Werts "`text`" handelt.


## Examples

### Example #1
Ruft die letzten fünf Zeichen des Texts "Hello, World" ab.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
