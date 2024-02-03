---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Menghapus hitungan karakter yang dimulai pada offset tertentu


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Mengembalikan salinan nilai teks <code>text</code> dengan semua karakter dari posisi <code>offset</code> yang dihapus.    Parameter opsional, <code>count</code> dapat digunakan untuk menentukan jumlah karakter yang akan dihapus. Nilai default <code>count</code> adalah 1. Nilai posisi dimulai dari 0.


## Examples

### Example #1 
Menghapus 1 karakter dari nilai teks &#34;ABEFC&#34; pada posisi 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Menghapus dua karakter dari nilai teks &#34;ABEFC&#34; yang dimulai pada posisi 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
