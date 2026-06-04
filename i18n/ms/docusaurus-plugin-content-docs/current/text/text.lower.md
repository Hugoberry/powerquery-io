---
title: Text.Lower
---

# Text.Lower


Menukar semua aksara kepada huruf kecil.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Mengembalikan hasil penukaran semua aksara dalam `text` kepada huruf kecil. `culture` pilihan juga mungkin diberikan (contohnya, "en-US").


## Examples

### Example #1
Dapatkan versi huruf kecil bagi "AbCd".
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
