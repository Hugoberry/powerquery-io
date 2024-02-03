---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Menunjukkan bila daftar mencakup semua nilai dalam daftar lain.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Menunjukkan apakah daftar <code>list</code> mencakup semua nilai dalam daftar lain, <code>values</code>.    Menghasilkan benar jika nilai ditemukan dalam daftar, atau salah jika sebaliknya. Nilai kriteria persamaan opsional, <code>equationCriteria</code>, dapat ditetapkan untuk mengontrol pengujian kesamaan. 


## Examples

### Example #1 
Mencari tahu apakah daftar \{1, 2, 3, 4, 5} berisi 3 dan 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Mencari tahu apakah daftar \{1, 2, 3, 4, 5} berisi 5 dan 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
