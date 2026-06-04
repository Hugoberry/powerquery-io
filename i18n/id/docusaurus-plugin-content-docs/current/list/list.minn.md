---
title: List.MinN
---

# List.MinN


Menghasilkan nilai minimum dalam daftar. Jumlah nilai yang akan dihasilkan atau ketentuan pemfilteran dapat ditetapkan.


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

Mengembalikan nilai minimum dalam daftar, `list`. Parameter, `countOrCondition`, menentukan jumlah nilai yang akan dihasilkan atau ketentuan pemfilteran. Parameter opsional, `comparisonCriteria`, menentukan cara membandingkan nilai dalam daftar.

-   `list`: Daftar nilai.
-   `countOrCondition`: Jika angka ditentukan, daftar hingga `countOrCondition` item dalam urutan naik dikembalikan. Jika ketentuan ditetapkan, daftar item yang awalnya sesuai dengan ketentuan akan dihasilkan. Jika ternyata salah satu item tidak sesuai dengan ketentuan, item lainnya tidak akan diperhitungkan. Jika parameter ini null, nilai terkecil tunggal dalam daftar akan dikembalikan.
-   `comparisonCriteria`: *(Opsional)* Nilai `comparisonCriteria` opsional dapat ditentukan untuk menentukan cara membandingkan item dalam daftar. Jika parameter ini null, pembanding default akan digunakan.


## Examples

### Example #1
Mencari 5 nilai terkecil dalam daftar `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
