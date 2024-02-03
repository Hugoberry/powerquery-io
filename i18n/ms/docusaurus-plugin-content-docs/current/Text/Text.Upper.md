---
title: Text.Upper
---

# Text.Upper


## Description

Menukar semua aksara kepada huruf besar.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Mengembalikan hasil penukaran semua aksara dalam <code>text</code> kepada huruf besar. <code>culture</code> pilihan juga mungkin diberikan (contohnya, "en-US").


## Examples

### Example #1 
Dapatkan versi huruf besar bagi &#34;aBcD&#34;.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
