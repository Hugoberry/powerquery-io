---
title: Text.RemoveRange
---

# Text.RemoveRange


Menghapus hitungan karakter yang dimulai pada offset tertentu


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Mengembalikan salinan nilai teks `text` dengan semua karakter dari posisi `offset` yang dihapus. Parameter opsional, `count` dapat digunakan untuk menentukan jumlah karakter yang akan dihapus. Nilai default `count` adalah 1. Nilai posisi dimulai dari 0.


## Examples

### Example #1
Menghapus 1 karakter dari nilai teks "ABEFC" pada posisi 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Menghapus dua karakter dari nilai teks "ABEFC" yang dimulai pada posisi 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
