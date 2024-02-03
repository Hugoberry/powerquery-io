---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Infers the granular number type (Int64.Type, Double.Type, and so on) of a number encoded in text.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Infers the granular number type (Int64.Type, Double.Type, and so on) of <code>text</code>. An error is raised if <code>text</code> is not a number. An optional <code>culture</code> may also be provided (for example, "en-US").



## Category
Text
