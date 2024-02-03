---
title: List.FirstN
---

# List.FirstN


## Description

Mengembalikan set pertama item dalam senarai dengan menentukan bilangan item untuk dikembalikan atau syarat kelayakan.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Jika nombor ditentukan, item sebanyak itu akan dikembalikan. </li>  <li>Jika syarat ditentukan, semua item dikembalikan yang pada asalnya memenuhi syarat. Setelah item gagal syarat tersebut, tiada item selanjutnya akan dipertimbangkan. </li> </ul>


## Examples

### Example #1 
Cari nilai asal dalam senarai \{3, 4, 5, -1, 7, 8, 2} yang lebih besar daripada sifar 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
