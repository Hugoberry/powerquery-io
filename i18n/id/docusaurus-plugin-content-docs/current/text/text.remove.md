---
title: Text.Remove
---

# Text.Remove


Menghapus semua kemunculan karakter atau daftar karakter tertentu dari nilai teks input.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Menghasilkan salinan nilai teks `text` dengan semua karakter dari `removeChars` yang dihapus.


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
