---
title: Text.Lower
---

# Text.Lower


## Description

Menukar semua aksara kepada huruf kecil.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Mengembalikan hasil penukaran semua aksara dalam <code>text</code> kepada huruf kecil. <code>culture</code> pilihan juga mungkin diberikan (contohnya, "en-US").


## Examples

### Example #1 
Dapatkan versi huruf kecil bagi &#34;AbCd&#34;.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
