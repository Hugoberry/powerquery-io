---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Menghasilkan fungsi yang mengkombinasikan daftar teks menggunakan panjang yang ditetapkan.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Menghasilkan fungsi yang mengkombinasikan daftar nilai teks menjadi nilai teks tunggal menggunakan panjang yang ditentukan.


## Examples

### Example #1 
Mengkombinasikan daftar nilai teks dengan mengekstrak sejumlah karakter yang ditentukan dari setiap nilai input.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Mengkombinasikan daftar nilai teks dengan mengekstrak sejumlah karakter yang ditentukan, setelah terlebih dahulu mengisi hasil dengan teks templat.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
