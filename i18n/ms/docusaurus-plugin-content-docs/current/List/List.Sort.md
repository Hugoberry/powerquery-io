---
title: List.Sort
---

# List.Sort


## Description

Isih senarai data menurut kriteria yang ditentukan.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Mengisih senarai data, <code>list</code>, mengikut kriteria pilihan yang ditentukan.    Parameter pilihan, <code>comparisonCriteria</code>, boleh ditentukan sebagai kriteria perbandingan. Ini boleh jadi dalam bentuk nilai berikut:    <ul>    <li> Untuk mengawal tertib, kriteria perbandingan boleh jadi nilai penyenaraian Tertib. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Untuk mengira kunci yang akan digunakan untuk pengisihan, fungsi 1 argumen boleh digunakan. </li>    <li> Untuk memilih kunci dan juga mengawal tertib, kriteria perbandingan boleh jadi senarai yang mengandungi kunci dan tertib (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Untuk mengawal perbandingan sepenuhnya, fungsi 2 argumen boleh digunakan. Fungsi ini akan menyalin dua item daripada senarai (mana-mana dua item, mengikut sebarang tertib). Fungsi seharusnya mengembalikan salah satu daripada nilai berikut:        <ul>            <li> <code>-1</code>: Item pertama adalah kurang daripada item kedua.</li>            <li> <code>0</code>: Item adalah sama.</li>            <li> <code>1</code>: Item pertama adalah lebih besar daripada item kedua.</li>        </ul>        Value.Compare adalah kaedah yang boleh digunakan untuk mewakilkan logik ini. </li>    </ul>


## Examples

### Example #1 
Isih senarai \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Isih senarai \{2, 3, 1} dalam urutan menurun.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Isih senarai \{2, 3, 1} dalam urutan menurun menggunakan kaedah Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
