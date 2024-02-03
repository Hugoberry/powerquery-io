---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Mengembalikan senarai yang mengalih keluar bilangan elemen yang ditentukan daripada hujung senarai.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Mengembalikan senarai yang mengalih keluar <code>countOrCondition</code> elemen terakhir daripada hujung senarai <code>list</code>. Jika <code>list</code> mempunyai kurang daripada <code>countOrCondition</code> elemen, senarai kosong dikembalikan. <ul> <li>Jika nombor ditentukan, item sebanyak itu akan dialih keluar. </li> <li>Jika syarat ditentukan, senarai yang dikembalikan tamat dengan elemen pertama dari bawah dalam <code>list</code> yang memenuhi kriteria tersebut. Setelah item gagal syarat tersebut, tiada item selanjutnya akan dipertimbangkan. </li> <li>Jika parameter ini ialah nol, hanya satu item akan dialih keluar. </li> </ul>


## Examples

### Example #1 
Cipta senarai daripada \{1, 2, 3, 4, 5} tanpa 3 nombor terakhir.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Cipta senarai daripada \{5, 4, 2, 6, 4} yang tamat dengan nombor kurang daripada 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
