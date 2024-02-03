---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Sınırlayıcıdaki karakterlerden herhangi birinde ayrılmış metin değerleri listesi döndürür.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

<code>text</code> metin değerini <code>separators</code> belirtilen sınırlayıcısındaki herhangi bir karaktere dayalı olarak ayırmanın sonucu olan metin değerleri listesini döndürür.


## Examples

### Example #1 
&#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34; metin değerinden bir liste oluşturur.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
