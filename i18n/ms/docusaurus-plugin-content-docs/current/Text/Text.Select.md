---
title: Text.Select
---

# Text.Select


## Description

Memilih semua kejadian aksara atau senarai aksara yang diberikan daripada nilai teks input.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Mengembalikan salinan nilai teks <code>text</code> dengan semua aksara yang tiada dalam <code>selectChars</code> dialih keluar.  


## Examples

### Example #1 
Pilih semua aksara dalam julat &#39;a&#39; hingga &#39;z&#39; daripada nilai teks.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
