---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Mengembalikan fungsi yang menggabungkan senarai teks menggunakan panjang yang ditentukan.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Mengembalikan fungsi yang menggabungkan satu senarai nilai teks menjadi nilai teks tunggal menggunakan panjang yang ditentukan.


## Examples

### Example #1 
Gabungkan senarai nilai teks dengan mengekstrak bilangan aksara yang ditentukan daripada setiap nilai input.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Gabungkan senarai nilai teks dengan mengekstrak bilangan aksara yang ditentukan, selepas mengisi hasil dengan teks templat terlebih dahulu.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
