---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Menunjukkan yang mana senarai menyertakan sebarang nilai dalam senarai lain.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Menunjukkan sama ada senarai <code>list</code> menyertakan sebarang nilai dalam senarai lain, <code>values</code>.        Mengembalikan benar jika nilai ditemui dalam senarai, palsu jika sebaliknya. Nilai kriteria persamaan pilihan, <code>equationCriteria</code>, boleh ditentukan untuk mengawal ujian persamaan. 


## Examples

### Example #1 
Ketahui sama ada senarai \{1, 2, 3, 4, 5} mengandungi 3 atau 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Ketahui sama ada senarai \{1, 2, 3, 4, 5} mengandungi 6 atau 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
