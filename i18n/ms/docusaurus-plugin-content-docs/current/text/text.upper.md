---
title: Text.Upper
---

# Text.Upper


Menukar semua aksara kepada huruf besar.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Mengembalikan hasil penukaran semua aksara dalam `text` kepada huruf besar. `culture` pilihan juga mungkin diberikan (contohnya, "en-US").


## Examples

### Example #1
Dapatkan versi huruf besar bagi "aBcD".
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
