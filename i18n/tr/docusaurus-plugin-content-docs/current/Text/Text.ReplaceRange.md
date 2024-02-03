---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

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


## Details

<code>text</code> metin değerinden <code>offset</code> konumunda <code>count</code> karakteri kaldırmanın ve <code>text</code> içindeki aynı konuma <code>newText</code> metin değerini eklemenin sonucunu döndürür.


## Examples

### Example #1 
&#34;ABGF&#34; metin değerinde 2 konumundaki tek karakteri &#34;CDE&#34; yeni metin değeri ile değiştirir.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
