---
title: Text.InferNumberType
---

# Text.InferNumberType


Kikövetkezteti a szövegben kódolt szám részletes számának típusát (Int64.Type, Double.Type stb.).


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Következtet a `text` részletes számtípusára (Int64.Type, Double.Type stb.). Hiba történik, ha a `text` nem számérték. Egy nem kötelező `culture` is megadható (például, „en-US”).



## Category
Text
