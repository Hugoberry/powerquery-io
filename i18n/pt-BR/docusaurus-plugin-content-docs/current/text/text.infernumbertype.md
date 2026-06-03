---
title: Text.InferNumberType
---

# Text.InferNumberType


Deduz o tipo de número granular (Int64.Type, Double.Type, etc.) de um número codificado no texto.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Deduz o tipo de número granular (Int64.Type, Double.Type, etc.) de `text`. Um erro será gerado se `text` não for um número. Um `culture` opcional também pode ser fornecido (por exemplo, “en-US”).



## Category
Text
