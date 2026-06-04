---
title: List.Min
---

# List.Min


Mengembalikan nilai minimum atau nilai lalai untuk senarai kosong.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Mengembalikan item minimum dalam senarai `list`, atau nilai lalai pilihan `default` jika senarai kosong. Nilai comparisonCriteria pilihan, `comparisonCriteria`, boleh ditentukan untuk menentukan cara bagi membandingkan item dalam senarai. Jika parameter ini ialah nol, pembanding lalai digunakan.


## Examples

### Example #1
Cari min dalam senarai \{1, 4, 7, 3, -2, 5\}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2
Cari min dalam senarai \{\} atau kembalikan -1 jika ia kosong.
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
