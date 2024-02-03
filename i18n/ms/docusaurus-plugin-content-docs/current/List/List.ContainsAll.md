---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Menunjukkan yang mana senarai menyertakan semua nilai dalam senarai lain.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Menunjukkan sama ada senarai <code>list</code> menyertakan semua nilai dalam senarai lain, <code>values</code>.    Mengembalikan benar jika nilai ditemui dalam senarai, palsu jika sebaliknya. Nilai kriteria persamaan pilihan, <code>equationCriteria</code>, boleh ditentukan untuk mengawal ujian persamaan. 


## Examples

### Example #1 
Ketahui sama ada senarai \{1, 2, 3, 4, 5} mengandungi 3 dan 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Ketahui sama ada senarai \{1, 2, 3, 4, 5} mengandungi 5 dan 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
