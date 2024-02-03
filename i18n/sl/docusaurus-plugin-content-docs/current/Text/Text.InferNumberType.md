---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Določi vrsto zrnatega števila (Int64.Type, Double.Type itd.) za število, ki je kodirano v besedilo.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Določi vrsto zrnatega števila (Int64.Type, Double.Type itd.) za <code>text</code>. Če <code>text</code> ni število, se prikaže sporočilo o napaki. Navedete lahko tudi dodatni parameter <code>culture</code> (na primer "sl-SI").



## Category
Text
