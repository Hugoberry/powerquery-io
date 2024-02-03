---
title: List.LastN
---

# List.LastN


## Description

Mengembalikan nilai terakhir dalam senarai.  Boleh menentukan secara pilihan bilangan nilai untuk dikembalikan atau syarat kelayakan.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Mengembalikan item terakhir pada senarai <code>list</code>. Jika senarai kosong, pengecualian dikembalikan. Fungsi ini mengambil parameter pilihan, <code>countOrCondition</code>, untuk menyokong pengumpulan berbilang item atau menapis item. <code>countOrCondition</code> boleh ditentukan melalui tiga cara: <ul>  <li>Jika nombor ditentukan, item sebanyak itu akan dikembalikan. </li>  <li>Jika syarat ditentukan, semua item dikembalikan yang pada asalnya memenuhi syarat, bermula di hujung senarai. Setelah item gagal syarat tersebut, tiada item selanjutnya akan dipertimbangkan. </li>  <li>Jika parameter ini ialah nol, item terakhir dalam senarai akan dikembalikan.</li> </ul>


## Examples

### Example #1 
Cari nilai terakhir dalam senarai \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Cari nilai terakhir dalam senarai \{3, 4, 5, -1, 7, 8, 2} yang lebih besar daripada sifar 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
