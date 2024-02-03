---
title: List.FirstN
---

# List.FirstN


## Description

Menghasilkan kumpulan pertama item dalam daftar dengan menentukan jumlah item yang akan dihasilkan atau kondisi yang memenuhi syarat.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Jika jumlah ditetapkan, item sebanyak jumlah tersebut akan dihasilkan. </li>  <li>Jika kondisi ditetapkan, semua item yang awalnya sesuai dengan kondisi akan dihasilkan. Jika ternyata salah satu item tidak sesuai dengan kondisi, item lainnya tidak akan diperhitungkan. </li> </ul>


## Examples

### Example #1 
Mencari nilai awal dalam daftar \{3, 4, 5, -1, 7, 8, 2} yang lebih besar dari 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
