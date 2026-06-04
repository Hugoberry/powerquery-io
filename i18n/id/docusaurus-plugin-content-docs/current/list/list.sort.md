---
title: List.Sort
---

# List.Sort


Mengurutkan daftar data sesuai dengan kriteria yang ditetapkan.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Mengurutkan daftar data, `list`, sesuai dengan kriteria opsional yang ditentukan. Parameter opsional, `comparisonCriteria`, dapat ditentukan sebagai kriteria perbandingan. Hal ini dapat memerlukan nilai berikut:

-   Untuk mengontrol urutan, kriteria perbandingan dapat berupa nilai enum Order. (`Order.Descending`, `Order.Ascending`).
-   Untuk menghitung kunci yang akan digunakan untuk mengurutkan, fungsi 1 argumen dapat digunakan.
-   Untuk memilih kunci dan mengontrol urutan, kriteria perbandingan dapat berupa daftar yang berisi kunci dan urutan (`{each 1 / _, Order.Descending}`).
-   Untuk mengontrol perbandingan sepenuhnya, fungsi 2 argumen dapat digunakan (misalnya Value.Compare). Fungsi ini akan diberi dua item dari daftar (dua item apa pun, dalam urutan apa pun). Fungsi harus menghasilkan salah satu nilai berikut:
    -   `-1`: Item pertama lebih kecil daripada item kedua.
    -   `0`: Itemnya sama.
    -   `1`: Item pertama lebih besar daripada item kedua.


## Examples

### Example #1
Mengurutkan daftar \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Mengurutkan daftar \{2, 3, 1\} dengan susunan turun.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Mengurutkan daftar \{2, 3, 1\} dengan susunan turun menggunakan metode Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
