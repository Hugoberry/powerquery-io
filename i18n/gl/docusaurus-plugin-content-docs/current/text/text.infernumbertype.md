---
title: Text.InferNumberType
---

# Text.InferNumberType


Infire un tipo de número granular (Int64.Type, Double.Type etc.) dun número codificado en texto.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Infire o tipo de número detallado (Int64.Type, Double.Type etc.) de `text`. Se `text` non é un número, prodúcese un erro. Tamén se pode fornecer unha `culture` opcional (por exemplo, "en-US").



## Category
Text
