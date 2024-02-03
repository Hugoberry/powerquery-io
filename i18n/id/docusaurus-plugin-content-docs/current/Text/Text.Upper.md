---
title: Text.Upper
---

# Text.Upper


## Description

Mengkonversi semua karakter ke huruf besar.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Mengembalikan hasil dari mengonversi semua karakter dalam <code>text</code> huruf besar. <code>culture</code> opsional juga dapat diberikan (misalnya, "en-US").


## Examples

### Example #1 
Mengambil versi huruf besar &#34;aBcD&#34;.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
