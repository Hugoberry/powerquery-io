---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Odstráni rozsah znakov a vloží novú hodnotu na zadanú pozíciu.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Vráti výsledok odstránenia počtu znakov: `count` z textovej hodnoty `text`, počnúc na pozícii `offset`, a potom vloží textovú hodnotu `newText` na rovnakú pozíciu v hodnote `text`.


## Examples

### Example #1
Nahraďte jeden znak na pozícii 2 v textovej hodnote "ABGF" novou textovou hodnotou "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
