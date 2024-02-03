---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Leidt het gedetailleerde getaltype (Int64.Type, Double.Type, enzovoort) af van een getal dat is gecodeerd in tekst.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Leidt het gedetailleerde getaltype (Int64.Type, Double.Type, enzovoort) af van <code>text</code>. Er treedt een fout op als <code>text</code> geen getal is. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld 'en-US').



## Category
Text
