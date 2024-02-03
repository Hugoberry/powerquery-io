---
title: Text.Remove
---

# Text.Remove


## Description

Menghapus semua kemunculan karakter atau daftar karakter tertentu dari nilai teks input.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Menghasilkan salinan nilai teks <code>text</code> dengan semua karakter dari <code>removeChars</code> yang dihapus.  


## Examples

### Example #1 
Menghapus karakter , dan ; dari nilai teks.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
