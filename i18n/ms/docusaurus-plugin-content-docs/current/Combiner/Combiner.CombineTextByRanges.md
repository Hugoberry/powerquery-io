---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Mengembalikan fungsi yang menggabungkan senarai teks menggunakan kedudukan dan panjang yang ditentukan.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Mengembalikan fungsi yang menggabungkan satu senarai nilai teks menjadi nilai teks tunggal menggunakan kedudukan dan panjang output yang ditentukan. Panjang nol menunjukkan bahawa keseluruhan nilai teks harus disertakan.


## Examples

### Example #1 
Gabungkan senarai nilai teks menggunakan kedudukan dan panjang output yang ditentukan.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
