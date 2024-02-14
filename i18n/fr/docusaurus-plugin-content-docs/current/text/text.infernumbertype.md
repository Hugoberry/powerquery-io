---
title: Text.InferNumberType
---

# Text.InferNumberType


Déduit le type de nombre granulaire (Int64.Type, Double.Type, etc.) d&#39;un nombre codé en texte.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Déduit le type de nombre granulaire (Int64.Type, Double.Type, etc.) de <code>text</code>. Une erreur est générée s'<code>text</code>il ne s'agit pas d'un nombre. Une option <code>culture</code> peut également être fournie (par exemple, "en-US").



## Category
Text
