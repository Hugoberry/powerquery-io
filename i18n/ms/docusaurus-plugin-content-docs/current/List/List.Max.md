---
title: List.Max
---

# List.Max


## Description

Mengembalikan nilai maksimum atau nilai lalai untuk senarai kosong.


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

Mengembalikan item maksimum dalam senarai <code>list</code>, atau nilai lalai pilihan <code>default</code> jika senarai kosong.    Nilai comparisonCriteria pilihan, <code>comparisonCriteria</code>, boleh ditentukan untuk menentukan cara bagi membandingkan item dalam senarai. Jika parameter ini ialah nol, pembanding lalai digunakan.


## Examples

### Example #1 
Cari maks dalam senarai \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Cari maks dalam senarai \{} atau kembalikan -1 jika ia kosong. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
