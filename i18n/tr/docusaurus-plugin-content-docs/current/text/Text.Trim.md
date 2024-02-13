---
title: Text.Trim
---

# Text.Trim


Tüm öndeki ve sondaki boşlukları kaldırır.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

<code>text</code> metin değerinden tüm öndeki ve sonraki boşlukları kaldırmanın sonucunu döndürür.


## Examples

### Example #1 
&#34;     a b c d    &#34; ifadesinden öndeki ve sondaki boşlukları kaldırır.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
