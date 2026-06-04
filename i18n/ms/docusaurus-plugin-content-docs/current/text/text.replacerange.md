---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Mengalih keluar julat aksara dan memasukkan nilai baru di kedudukan yang ditentukan.


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

Mengembalikan hasil daripada mengalih keluar bilangan aksara, `count`, daripada nilai teks `text` yang bermula di kedudukan `offset` dan kemudian memasukkan nilai teks `newText` di kedudukan yang sama dalam `text`.


## Examples

### Example #1
Gantikan aksara tunggal di kedudukan 2 dalam nilai teks "ABGF" dengan nilai teks baru "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
