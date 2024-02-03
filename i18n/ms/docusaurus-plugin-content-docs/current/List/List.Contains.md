---
title: List.Contains
---

# List.Contains


## Description

Menunjukkan sama ada senarai mengandungi nilai.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Menunjukkan sama ada senarai <code>list</code> mengandungi nilai <code>value</code>.    Mengembalikan benar jika nilai ditemui dalam senarai, palsu jika sebaliknya. Nilai kriteria persamaan pilihan, <code>equationCriteria</code>, boleh ditentukan untuk mengawal ujian persamaan. 


## Examples

### Example #1 
Ketahui sama ada senarai \{1, 2, 3, 4, 5} mengandungi 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Ketahui sama ada senarai \{1, 2, 3, 4, 5} mengandungi 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
