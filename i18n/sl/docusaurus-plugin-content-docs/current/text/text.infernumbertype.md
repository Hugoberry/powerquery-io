---
title: Text.InferNumberType
---

# Text.InferNumberType


Določi vrsto zrnatega števila (Int64.Type, Double.Type itd.) za število, ki je kodirano v besedilo.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Določi vrsto zrnatega števila (Int64.Type, Double.Type itd.) za `text`. Če `text` ni število, se prikaže sporočilo o napaki. Navedete lahko tudi dodatni parameter `culture` (na primer"sl-SI").



## Category
Text
