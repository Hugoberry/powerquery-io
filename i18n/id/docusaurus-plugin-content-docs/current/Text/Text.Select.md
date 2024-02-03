---
title: Text.Select
---

# Text.Select


## Description

Memilih semua kemunculan karakter atau daftar karakter tertentu dari nilai teks input.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Menghasilkan salinan nilai teks <code>text</code> dengan semua karakter yang tidak berada di <code>selectChars</code> dihapus.  


## Examples

### Example #1 
Pilih semua karakter dalam kisaran &#39;a&#39; sampai &#39;z&#39; dari nilai teks.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
