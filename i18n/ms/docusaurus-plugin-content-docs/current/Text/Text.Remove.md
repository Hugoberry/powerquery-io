---
title: Text.Remove
---

# Text.Remove


## Description

Mengalih keluar semua kejadian aksara yang ditentukan atau senarai aksara daripada nilai teks input.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Mengembalikan salinan nilai teks <code>text</code> dengan semua aksara daripada <code>removeChars</code> dialih keluar.  


## Examples

### Example #1 
Alih keluar aksara , dan ; daripada nilai teks.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
