---
title: Text.Replace
---

# Text.Replace


Menggantikan semua kejadian subrentetan yang ditentukan dalam teks.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Mengembalikan hasil daripada menggantikan semua kejadian nilai teks `old` dalam nilai teks `text` dengan nilai teks `new`. Fungsi ini adalah sensitif huruf besar atau kecil.


## Examples

### Example #1
Gantikan setiap kejadian "the" dalam ayat dengan "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
