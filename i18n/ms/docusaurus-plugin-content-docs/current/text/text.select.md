---
title: Text.Select
---

# Text.Select


Memilih semua kejadian aksara atau senarai aksara yang diberikan daripada nilai teks input.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Mengembalikan salinan nilai teks `text` dengan semua aksara yang tiada dalam `selectChars` dialih keluar.


## Examples

### Example #1
Pilih semua aksara dalam julat 'a' hingga 'z' daripada nilai teks.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
