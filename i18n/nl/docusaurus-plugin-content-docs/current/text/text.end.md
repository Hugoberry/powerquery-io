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

Retourneert een `text`waarde die de laatste `count` tekens van de `text`waarde `text` is.


## Examples

### Example #1
De laatste vijf tekens van de tekst "Hallo, Wereld" ophalen
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
