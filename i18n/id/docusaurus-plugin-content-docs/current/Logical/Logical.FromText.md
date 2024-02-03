---
title: Logical.FromText
---

# Logical.FromText


## Description

Membuat nilai logika dari nilai teks &#34;benar&#34; dan &#34;salah&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Membuat nilai logika dari nilai teks <code>text</code>, baik "benar" maupun "salah". Jika <code>text</code> berisi string yang berbeda, pengecualian akan dibuat. Nilai teks <code>text</code> tidak peka huruf besar-kecil.


## Examples

### Example #1 
Membuat nilai logika dari string teks &#34;benar&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Membuat nilai logika dari string teks &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
