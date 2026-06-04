---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Menghapus kisaran karakter dan menyisipkan nilai baru pada posisi tertentu.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Memberikan hasil sejumlah karakter terhapus, `count`, dari nilai teks `text` dimulai pada posisi `offset`, lalu menyisipkan nilai teks `newText` di posisi yang sama pada `text`.


## Examples

### Example #1
Mengganti satu karakter di posisi 2 pada nilai teks "ABGF" dengan nilai teks baru "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
