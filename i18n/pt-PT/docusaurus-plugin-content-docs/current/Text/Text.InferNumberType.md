---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Infere o tipo de número granular (Int64.Type, Double.Type, etc.) de um número codificado em texto.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Infere o tipo de número granular (Int64.Type, Double.Type, etc.) de <code>text</code>. Um erro ocorre se <code>text</code> não for um número. Pode também ser fornecida uma <code>culture</code> opcional (por exemplo, "en-US").



## Category
Text
