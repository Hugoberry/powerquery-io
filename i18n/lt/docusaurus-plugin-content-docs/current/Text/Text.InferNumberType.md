---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Nustatomas tekste užkoduoto skaičiaus detalizuoto skaičiaus tipas (Int64.Type, Double.Type ir t. t.).


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Nustatomas <code>text</code> granuliuoto skaičiaus tipas (Int64.Type, Double.Type ir t. t.). Pateikiama klaida, jei <code>text</code> nėra skaičius. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).



## Category
Text
