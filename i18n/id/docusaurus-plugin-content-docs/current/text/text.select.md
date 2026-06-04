---
title: Text.Select
---

# Text.Select


Memilih semua kemunculan karakter atau daftar karakter tertentu dari nilai teks input.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Menghasilkan salinan nilai teks `text` dengan semua karakter yang tidak berada di `selectChars` dihapus.


## Examples

### Example #1
Pilih semua karakter dalam kisaran 'a' sampai 'z' dari nilai teks.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
