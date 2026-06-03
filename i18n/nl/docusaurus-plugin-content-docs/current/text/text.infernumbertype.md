---
title: Text.InferNumberType
---

# Text.InferNumberType


Leidt het gedetailleerde getaltype (Int64.Type, Double.Type, enzovoort) af van een getal dat is gecodeerd in tekst.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Leidt het gedetailleerde getaltype (Int64.Type, Double.Type, enzovoort) af van `text`. Er treedt een fout op als `text` geen getal is. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld 'en-US').



## Category
Text
