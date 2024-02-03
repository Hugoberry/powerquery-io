---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Mengalih keluar kiraan aksara yang bermula di ofset yang ditentukan


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Mengembalikan salinan nilai teks <code>text</code> dengan semua aksara daripada kedudukan <code>offset</code> dialih keluar.    Parameter pilihan, <code>count</code>, boleh digunakan untuk menentukan bilangan aksara untuk dialih keluar. Nilai lalai untuk <code>count</code> ialah 1. Nilai kedudukan bermula di 0.


## Examples

### Example #1 
Alih keluar 1 aksara daripada nilai teks &#34;ABEFC&#34; di kedudukan 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Alih keluar dua aksara daripada nilai teks &#34;ABEFC&#34; yang bermula di kedudukan 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
