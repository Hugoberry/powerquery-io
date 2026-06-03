---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Bir aralıktaki karakterleri kaldırır ve belirtilen konumda yeni bir değer ekler.


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

`text` metin değerinden `offset` konumunda `count` karakteri kaldırmanın ve `text` içindeki aynı konuma `newText` metin değerini eklemenin sonucunu döndürür.


## Examples

### Example #1
"ABGF" metin değerinde 2 konumundaki tek karakteri "CDE" yeni metin değeri ile değiştirir.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
