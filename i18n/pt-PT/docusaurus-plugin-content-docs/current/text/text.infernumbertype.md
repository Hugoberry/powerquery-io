---
title: Text.InferNumberType
---

# Text.InferNumberType


Infere o tipo de número granular (Int64.Type, Double.Type, etc.) de um número codificado em texto.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Infere o tipo de número granular (Int64.Type, Double.Type, etc.) de `text`. Um erro ocorre se `text` não for um número. Pode também ser fornecida uma `culture` opcional (por exemplo, "en-US").



## Category
Text
