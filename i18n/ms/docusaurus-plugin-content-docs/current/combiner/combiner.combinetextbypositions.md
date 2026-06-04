---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


Mengembalikan fungsi yang menggabungkan senarai teks menggunakan kedudukan output yang ditentukan.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Remarks

Mengembalikan fungsi yang menggabungkan satu senarai nilai teks menjadi nilai teks tunggal menggunakan kedudukan output yang ditentukan.


## Examples

### Example #1
Gabungkan senarai nilai teks dengan menempatkannya dalam output pada kedudukan yang ditentukan.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
