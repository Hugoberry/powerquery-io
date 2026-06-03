---
title: Text.InferNumberType
---

# Text.InferNumberType


Deduce el tipo de número granular (Int64.Type, Double.Type, etc.) de un número codificado en texto.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Deduce el tipo de número granular (Int64.Type, Double.Type, etc.) de `text`. Se produce un error si `text` no es un número. También se puede proporciona un `culture`opcional (por ejemplo, "en-US").



## Category
Text
