---
title: Text.Lower
---

# Text.Lower


## Description

Tüm karakterleri küçük harfe çevirir.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

<code>text</code> içindeki tüm karakterlerin küçük harfe dönüştürülmesinin sonucu döndürür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör "tr-TR").


## Examples

### Example #1 
&#34;AbCd&#34; ifadesinin küçük harfli sürümünü alır.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
