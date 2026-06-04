---
title: Text.InferNumberType
---

# Text.InferNumberType


Permet inferir el tipus de nombre granular (Int64.Type, Double.Type, etc.) d'un nombre codificat en text.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Infereix el tipus de nombre granular (Int64.Type, Double.Type, etc.) del valor `text`. Es produeix un error si `text` no és un nombre. També es pot proporcionar un valor `culture` (per exemple, "en-US").



## Category
Text
