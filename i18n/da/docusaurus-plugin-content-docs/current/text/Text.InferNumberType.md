---
title: Text.InferNumberType
---

# Text.InferNumberType


Udleder den granulerede nummertype (Int64.Type, Double.Type osv.) for et nummer, der er kodet i tekst.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Udleder den granulerede nummertype (Int64.Type, Double.Type osv.) for <code>text</code>. Der opstår en fejl, hvis <code>text</code> ikke er et tal. Der kan også angives en valgfri <code>culture</code> (f. eks. "en-US").



## Category
Text
