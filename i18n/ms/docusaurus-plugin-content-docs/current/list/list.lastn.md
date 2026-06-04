---
title: List.LastN
---

# List.LastN


Mengembalikan senarai item terakhir atau item dalam senarai yang ditentukan. Boleh menentukan secara pilihan bilangan nilai untuk dikembalikan atau syarat kelayakan.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Mengembalikan senarai item terakhir atau item dalam senarai yang ditentukan.

-   `list`: Senarai untuk diperiksa. Jika senarai kosong, senarai kosong dikembalikan.
-   `countOrCondition`: (Pilihan) Menyokong pengumpulan berbilang item atau penapisan item. Walaupun parameter ini disenaraikan sebagai pilihan, ralat berlaku jika nilai ini tidak diberikan atau `nol`. Parameter ini boleh ditentukan dalam dua cara:
    -   Jika nombor ditentukan, sehingga sebanyak item itu dialih keluar.
    -   Jika syarat ditentukan, semua item dikembalikan yang memenuhi syarat, bermula dari bahagian hujung senarai. Setelah item gagal memenuhi syarat, tiada item selanjutnya akan dipertimbangkan.


## Examples

### Example #1
Cari nilai terakhir dalam senarai \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Cari nilai terakhir dalam senarai \{3, 4, 5, -1, 7, 8, 2\} yang lebih besar daripada sifar 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
