---
title: Text.End
---

# Text.End


Retourneert de laatste tekens van de tekst.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Retourneert een <code>text</code>waarde die de laatste <code>count</code> tekens van de <code>text</code>waarde <code>text</code> is.


## Examples

### Example #1 
De laatste vijf tekens van de tekst &#34;Hallo, Wereld&#34; ophalen
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
