---
title: Text.End
---

# Text.End


Returnerer de sidste tegn i teksten.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Returnerer en værdi af typen <code>text</code>, der er det sidste <code>count</code>-tegn i værdien <code>text</code> <code>text</code>.


## Examples

### Example #1 
Hent de sidste fem tegn i teksten &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
