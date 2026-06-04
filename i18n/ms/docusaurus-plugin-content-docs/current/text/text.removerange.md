---
title: Text.RemoveRange
---

# Text.RemoveRange


Mengalih keluar kiraan aksara yang bermula di ofset yang ditentukan


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Mengembalikan salinan nilai teks `text` dengan semua aksara daripada kedudukan `offset` dialih keluar. Parameter pilihan, `count`, boleh digunakan untuk menentukan bilangan aksara untuk dialih keluar. Nilai lalai untuk `count` ialah 1. Nilai kedudukan bermula di 0.


## Examples

### Example #1
Alih keluar 1 aksara daripada nilai teks "ABEFC" di kedudukan 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Alih keluar dua aksara daripada nilai teks "ABEFC" yang bermula di kedudukan 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
