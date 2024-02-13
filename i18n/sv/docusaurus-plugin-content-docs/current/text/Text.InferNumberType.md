---
title: Text.InferNumberType
---

# Text.InferNumberType


Härleder den detaljerade nummertypen (Int64.Type, Double.Type, osv.) för ett tal som är kodat i text.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Härleder den detaljerade taltypen (Int64.Type, Double.Type, osv.) för <code>text</code>. Ett fel uppstår om <code>text</code> inte är ett tal. En valfri <code>culture</code> kan även anges (till exempel "en-US").



## Category
Text
