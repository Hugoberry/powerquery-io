---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Permet inferir el tipus de nombre granular (Int64.Type, Double.Type, etc.) d&#39;un nombre codificat en text.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Infereix el tipus de nombre granular (Int64.Type, Double.Type, etc.) del valor <code>text</code>. Es produeix un error si <code>text</code> no és un nombre. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").



## Category
Text
