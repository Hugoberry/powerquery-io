---
title: Text.Start
---

# Text.Start


Retourneert het begin van de tekst.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

Retourneert de eerste <code>count</code> tekens van <code>text</code> als een tekstwaarde.


## Examples

### Example #1 
De eerste vijf tekens van de tekst &#34;Hallo, Wereld&#34; ophalen
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
