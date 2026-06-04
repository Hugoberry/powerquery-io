---
title: List.MinN
---

# List.MinN


Mengembalikan nilai minimum dalam senarai. Bilangan nilai untuk dikembalikan atau syarat penapisan boleh ditentukan.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Mengembalikan nilai minimum dalam senarai, `list`. Parameter, `countOrCondition`, menentukan bilangan nilai untuk dikembalikan atau syarat penapisan. Parameter pilihan, `comparisonCriteria`, menentukan cara untuk membandingkan nilai dalam senarai.

-   `list`: Senarai nilai.
-   `countOrCondition`: Jika nombor ditentukan, senarai sehingga `countOrCondition` item dalam tertib menaik dikembalikan. Jika syarat ditentukan, senarai item yang pada asalnya memenuhi syarat dikembalikan. Setelah item gagal syarat tersebut, tiada item selanjutnya akan dipertimbangkan. Jika parameter ini nol, nilai terkecil tunggal dalam senarai dikembalikan.
-   `comparisonCriteria`: *(Pilihan)* Nilai `comparisonCriteria` boleh ditentukan untuk menentukan cara membandingkan item dalam senarai. Jika parameter ini nol, pembanding lalai digunakan.


## Examples

### Example #1
Cari 5 nilai terkecil dalam senarai `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
