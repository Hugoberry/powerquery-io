---
title: Text.Middle
---

# Text.Middle


## Description

Gibt die Teilzeichenfolge bis zu einer bestimmten Länge zurück.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Gibt <code>count</code> Zeichen oder alle bis zum Ende <code>text</code> zurück; beim Offset <code>start</code>.


## Examples

### Example #1 
Ermittelt die Teilzeichenfolge aus dem Text &#34;Hello World&#34;, die bei Index 6 beginnt und 5 Zeichen umfasst.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Ermittelt die Teilzeichenfolge aus dem Text &#34;Hello World&#34;, die bei Index 6 beginnt, bis zum Ende.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
