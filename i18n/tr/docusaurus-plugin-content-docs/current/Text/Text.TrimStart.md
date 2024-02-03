---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Tüm öndeki boşlukları kaldırır.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

<code>text</code> metin değerinden tüm öndeki boşlukları kaldırmanın sonucunu döndürür.


## Examples

### Example #1 
&#34;     a b c d    &#34; ifadesinden öndeki boşlukları kaldırır.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
