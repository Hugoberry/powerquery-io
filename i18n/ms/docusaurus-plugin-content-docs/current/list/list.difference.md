---
title: List.Difference
---

# List.Difference


Mengembalikan perbezaan dua senarai yang ditentukan.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Mengembalikan item dalam senarai `list1` yang tidak muncul dalam senarai `list2`. Nilai pendua disokong. Nilai kriteria persamaan pilihan, `equationCriteria`, boleh ditentukan untuk mengawal ujian persamaan.


## Examples

### Example #1
Cari item dalam senarai \{1, 2, 3, 4, 5\} yang tidak muncul dalam \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Cari item dalam senarai \{1, 2\} yang tidak muncul dalam \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
