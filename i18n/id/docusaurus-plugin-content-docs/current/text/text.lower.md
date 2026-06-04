---
title: Text.Lower
---

# Text.Lower


Mengkonversi semua karakter ke huruf kecil.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Mengembalikan hasil dari mengonversi semua karakter dalam `text` ke huruf kecil. `culture` opsional juga dapat diberikan (misalnya, "en-US").


## Examples

### Example #1
Mengambil versi huruf kecil dari "AbCd".
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
