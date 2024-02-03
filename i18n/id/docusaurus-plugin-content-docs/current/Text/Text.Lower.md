---
title: Text.Lower
---

# Text.Lower


## Description

Mengkonversi semua karakter ke huruf kecil.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Mengembalikan hasil dari mengonversi semua karakter dalam <code>text</code> ke huruf kecil. <code>culture</code> opsional juga dapat diberikan (misalnya, "en-US").


## Examples

### Example #1 
Mengambil versi huruf kecil dari &#34;AbCd&#34;.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
