---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Deduz o tipo de número granular (Int64.Type, Double.Type, etc.) de um número codificado no texto.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Deduz o tipo de número granular (Int64.Type, Double.Type, etc.) de <code>text</code>. Um erro será gerado se <code>text</code> não for um número. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, “en-US”).



## Category
Text
