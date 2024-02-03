---
title: List.Contains
---

# List.Contains


## Description

Menunjukkan apakah daftar berisi nilai.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Menunjukkan apakah daftar <code>list</code> berisi nilai <code>value</code>.    Menghasilkan true jika nilai ditemukan dalam daftar, atau false jika sebaliknya. Nilai kriteria persamaan opsional, <code>equationCriteria</code>, dapat ditentukan untuk mengontrol pengujian persamaan. 


## Examples

### Example #1 
Mencari apakah daftar \{1, 2, 3, 4, 5} berisi 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Mencari apakah daftar \{1, 2, 3, 4, 5} berisi 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
