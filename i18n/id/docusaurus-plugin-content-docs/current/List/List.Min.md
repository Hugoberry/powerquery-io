---
title: List.Min
---

# List.Min


## Description

Menghasilkan nilai minimum atau nilai default untuk daftar kosong.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Mengembalikan item minimum dalam daftar <code>list</code>, atau nilai default opsional <code>default</code> jika daftar kosong.    Nilai comparisonCriteria opsional, <code>comparisonCriteria</code>, dapat ditetapkan untuk menentukan cara membandingkan item dalam daftar. Jika parameter ini null, pembanding default akan digunakan.


## Examples

### Example #1 
Mencari minimum dalam daftar \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Mencari minimum dalam daftar \{} atau -1 akan dihasilkan jika kosong. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
