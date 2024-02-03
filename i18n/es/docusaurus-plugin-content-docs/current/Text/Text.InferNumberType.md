---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Deduce el tipo de número granular (Int64.Type, Double.Type, etc.) de un número codificado en texto.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Deduce el tipo de número granular (Int64.Type, Double.Type, etc.) de <code>text</code>. Se produce un error si <code>text</code> no es un número. También se puede proporciona un <code>culture</code>opcional (por ejemplo, "en-US").



## Category
Text
