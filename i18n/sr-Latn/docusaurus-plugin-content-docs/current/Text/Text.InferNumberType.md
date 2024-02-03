---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Izvodi tip granularnog broja (Int64.Type, Double.Type itd.) za broj šifrovan u tekstu.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Izvodi granularni tip broja (Int64.Type, Double.Type itd.) od <code>text</code>. Prijavljuje se greška ako <code>text</code> nije broj. Opcionalno <code>culture</code> se takođe može navesti (na primer, „sr-Latn-RS“).



## Category
Text
