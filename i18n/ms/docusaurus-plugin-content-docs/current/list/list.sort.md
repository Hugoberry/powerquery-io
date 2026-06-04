---
title: List.Sort
---

# List.Sort


Isih senarai data menurut kriteria yang ditentukan.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Mengisih senarai data, `list`, mengikut kriteria pilihan yang ditentukan. Parameter pilihan, `comparisonCriteria`, boleh ditentukan sebagai kriteria perbandingan. Ini boleh jadi dalam bentuk nilai berikut:

-   Untuk mengawal tertib, kriteria perbandingan boleh jadi nilai penyenaraian Tertib. (`Order.Descending`, `Order.Ascending`).
-   Untuk mengira kunci yang akan digunakan untuk pengisihan, fungsi 1 argumen boleh digunakan.
-   Untuk memilih kunci dan juga mengawal tertib, kriteria perbandingan boleh jadi senarai yang mengandungi kunci dan tertib (`{each 1 / _, Order.Descending}`).
-   Untuk mengawal perbandingan sepenuhnya, fungsi 2 argumen boleh digunakan (seperti Value.Compare). Fungsi ini akan menyalin dua item daripada senarai (mana-mana dua item, mengikut sebarang tertib). Fungsi seharusnya mengembalikan salah satu daripada nilai berikut:
    -   `-1`: Item pertama adalah kurang daripada item kedua.
    -   `0`: Item adalah sama.
    -   `1`: Item pertama adalah lebih besar daripada item kedua.


## Examples

### Example #1
Isih senarai \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Isih senarai \{2, 3, 1\} dalam urutan menurun.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Isih senarai \{2, 3, 1\} dalam urutan menurun menggunakan kaedah Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
