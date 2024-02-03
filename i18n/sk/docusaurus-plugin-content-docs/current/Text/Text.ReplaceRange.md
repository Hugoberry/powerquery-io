---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

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


## Details

Vráti výsledok odstránenia počtu znakov: <code>count</code> z textovej hodnoty <code>text</code>, počnúc na pozícii <code>offset</code>, a potom vloží textovú hodnotu <code>newText</code> na rovnakú pozíciu v hodnote <code>text</code>.


## Examples

### Example #1 
Nahraďte jeden znak na pozícii 2 v textovej hodnote &#34;ABGF&#34; novou textovou hodnotou &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
