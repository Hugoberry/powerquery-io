---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Menghasilkan offset pertama nilai dalam daftar.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Mengembalikan offset dalam daftar <code>list</code> dari kemunculan pertama nilai dalam daftar <code>values</code>. Mengembalikan -1 jika tidak ada kemunculan yang ditemukan.    Parameter kemunculan opsional <code>occurrence</code> dapat ditetapkan.<ul>   <li><code>occurrence</code>: Jumlah maksimum kemunculan yang dapat dihasilkan.</li></ul>


## Examples

### Example #1 
Mencari posisi pertama dalam daftar \{1, 2, 3} yang menampilkan nilai 2 atau 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
