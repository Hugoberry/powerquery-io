---
title: Text.Start
---

# Text.Start


Returnerar början av texten.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

Returnerar de första <code>count</code> tecknen i <code>text</code> som ett textvärde.


## Examples

### Example #1 
Hämta de 5 första tecknen i &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
