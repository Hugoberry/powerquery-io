---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Menghasilkan fungsi yang mengkombinasikan daftar teks menggunakan posisi dan panjang yang ditetapkan.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Menghasilkan fungsi yang mengkombinasikan daftar nilai teks menjadi nilai teks tunggal menggunakan posisi output dan panjang yang ditetapkan. Panjang null menunjukkan bahwa seluruh nilai teks harus disertakan.


## Examples

### Example #1 
Mengkombinasikan daftar nilai teks menggunakan posisi dan panjang output yang ditetapkan.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
