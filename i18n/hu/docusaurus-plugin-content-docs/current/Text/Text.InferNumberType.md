---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Kikövetkezteti a szövegben kódolt szám részletes számának típusát (Int64.Type, Double.Type stb.).


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Következtet a <code>text</code> részletes számtípusára (Int64.Type, Double.Type stb.). Hiba történik, ha a <code>text</code> nem számérték. Egy nem kötelező <code>culture</code> is megadható (például, „en-US”).



## Category
Text
