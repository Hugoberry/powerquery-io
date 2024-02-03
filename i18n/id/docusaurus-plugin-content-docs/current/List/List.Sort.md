---
title: List.Sort
---

# List.Sort


## Description

Mengurutkan daftar data sesuai dengan kriteria yang ditetapkan.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Mengurutkan daftar data, <code>list</code>, sesuai dengan kriteria opsional yang ditentukan.    Parameter opsional, <code>comparisonCriteria</code>, dapat ditentukan sebagai kriteria perbandingan. Hal ini dapat memerlukan nilai berikut:    <ul>    <li> Untuk mengontrol urutan, kriteria perbandingan dapat berupa nilai enum Order. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Untuk menghitung kunci yang akan digunakan untuk mengurutkan, fungsi 1 argumen dapat digunakan. </li>    <li> Untuk memilih kunci dan mengontrol urutan, kriteria perbandingan dapat berupa daftar yang berisi kunci dan urutan (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Untuk mengontrol perbandingan sepenuhnya, fungsi 2 argumen dapat digunakan. Fungsi ini akan diberi dua item dari daftar (dua item apa pun, dalam urutan apa pun). Fungsi harus menghasilkan salah satu nilai berikut:        <ul>            <li> <code>-1</code>: Item pertama lebih kecil daripada item kedua.</li>            <li> <code>0</code>: Itemnya sama.</li>            <li> <code>1</code>: Item pertama lebih besar daripada item kedua.</li>        </ul>        Value.Compare adalah metode yang dapat digunakan untuk mendelegasikan logika ini. </li>    </ul>


## Examples

### Example #1 
Mengurutkan daftar \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Mengurutkan daftar \{2, 3, 1} dengan susunan turun.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Mengurutkan daftar \{2, 3, 1} dengan susunan turun menggunakan metode Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
