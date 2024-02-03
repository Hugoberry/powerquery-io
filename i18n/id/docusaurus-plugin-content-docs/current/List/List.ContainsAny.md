---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Menunjukkan bila daftar mencakup salah satu nilai dalam daftar lain.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Menunjukkan apakah daftar <code>list</code> mencakup salah satu nilai dalam daftar lain, <code>values</code>.        Menghasilkan benar jika nilai ditemukan dalam daftar, atau salah jika sebaliknya. Nilai kriteria persamaan opsional, <code>equationCriteria</code>, dapat ditetapkan untuk mengontrol pengujian kesamaan. 


## Examples

### Example #1 
Mencari tahu apakah daftar \{1, 2, 3, 4, 5} berisi 3 atau 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Mencari tahu apakah daftar \{1, 2, 3, 4, 5} berisi 6 atau 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
