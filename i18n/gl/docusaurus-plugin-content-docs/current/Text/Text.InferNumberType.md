---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Infire un tipo de número granular (Int64.Type, Double.Type etc.) dun número codificado en texto.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Infire o tipo de número detallado (Int64.Type, Double.Type etc.) de <code>text</code>. Se <code>text</code> non é un número, prodúcese un erro. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "en-US").



## Category
Text
