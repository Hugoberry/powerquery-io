---
title: Text.Upper
---

# Text.Upper


Mengkonversi semua karakter ke huruf besar.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Mengembalikan hasil dari mengonversi semua karakter dalam `text` huruf besar. `culture` opsional juga dapat diberikan (misalnya, "en-US").


## Examples

### Example #1
Mengambil versi huruf besar "aBcD".
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
