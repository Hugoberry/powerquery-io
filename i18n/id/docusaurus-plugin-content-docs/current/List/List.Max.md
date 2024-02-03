---
title: List.Max
---

# List.Max


## Description

Menghasilkan nilai maksimum atau nilai default untuk daftar kosong.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Mengembalikan item maksimum dalam daftar <code>list</code>, atau nilai default opsional <code>default</code> jika daftar kosong.    Nilai comparisonCriteria opsional, <code>comparisonCriteria</code>, dapat ditetapkan untuk menentukan cara membandingkan item dalam daftar. Jika parameter ini null, pembanding default akan digunakan.


## Examples

### Example #1 
Mencari maksimum dalam daftar \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Mencari maksimum dalam daftar \{} atau -1 akan dihasilkan jika kosong. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
