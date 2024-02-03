---
title: List.RemoveFirstN
---

# List.RemoveFirstN


## Description

Mengembalikan senarai yang melangkau bilangan elemen yang ditentukan di permulaan senarai.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Mengembalikan senarai yang mengalih keluar elemen pertama pada senarai <code>list</code>. Jika <code>list</code> ialah senarai kosong, senarai kosong dikembalikan.Fungsi ini mengambil parameter pilihan, <code>countOrCondition</code>, untuk menyokong mengalih keluar berbilang nilai seperti yang disenaraikan di bawah.  <ul> <li>Jika nombor ditentukan, item sebanyak itu akan dialih keluar. </li> <li>Jika syarat ditentukan, senarai yang dikembalikan bermula dengan elemen pertama dalam <code>list</code> yang memenuhi kriteria tersebut. Setelah item gagal syarat tersebut, tiada item selanjutnya akan dipertimbangkan. </li> <li>Jika parameter ini ialah nol, kelakuan lalai diperhatikan. </li> </ul>


## Examples

### Example #1 
Cipta senarai daripada \{1, 2, 3, 4, 5} tanpa 3 nombor pertama.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Cipta senarai daripada \{5, 4, 2, 6, 1} yang bermula dengan nombor kurang daripada 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions