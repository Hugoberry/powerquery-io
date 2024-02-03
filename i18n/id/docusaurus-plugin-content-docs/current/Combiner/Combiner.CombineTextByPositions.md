---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Menghasilkan fungsi yang mengkombinasikan daftar teks menggunakan posisi output yang ditetapkan.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Menghasilkan fungsi yang mengkombinasikan daftar nilai teks menjadi nilai teks tunggal menggunakan posisi output yang ditetapkan.


## Examples

### Example #1 
Mengkombinasikan daftar nilai teks dengan menempatkannya dalam output pada posisi yang ditentukan.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
