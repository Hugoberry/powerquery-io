---
title: Text.End
---

# Text.End


Returnerar de sista tecknen i texten.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Returnerar ett <code>text</code>-värde som är de sista <code>count</code> tecknen i <code>text</code>-värdet <code>text</code>.


## Examples

### Example #1 
Hämta de sista 5 tecknen i texten &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
