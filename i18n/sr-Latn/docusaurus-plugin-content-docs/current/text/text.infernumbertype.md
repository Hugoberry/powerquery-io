---
title: Text.InferNumberType
---

# Text.InferNumberType


Izvodi tip granularnog broja (Int64.Type, Double.Type itd.) za broj šifrovan u tekstu.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Izvodi granularni tip broja (Int64.Type, Double.Type itd.) od `text`. Prijavljuje se greška ako `text` nije broj. Opcionalno `culture` se takođe može navesti (na primer, „sr-Latn-RS“).



## Category
Text
