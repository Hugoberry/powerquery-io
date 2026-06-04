---
title: Text.InferNumberType
---

# Text.InferNumberType


Nustatomas tekste užkoduoto skaičiaus detalizuoto skaičiaus tipas (Int64.Type, Double.Type ir t. t.).


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Nustatomas `text` granuliuoto skaičiaus tipas (Int64.Type, Double.Type ir t. t.). Pateikiama klaida, jei `text` nėra skaičius. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“).



## Category
Text
