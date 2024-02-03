---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Tüm sonraki boşlukları kaldırır.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

<code>text</code> metin değerinden tüm sonraki boşlukları kaldırmanın sonucunu döndürür.


## Examples

### Example #1 
&#34;     a b c d    &#34; ifadesinden sondaki boşlukları kaldırır.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
