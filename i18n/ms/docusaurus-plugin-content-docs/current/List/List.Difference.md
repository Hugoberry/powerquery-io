---
title: List.Difference
---

# List.Difference


## Description

Mengembalikan perbezaan dua senarai yang ditentukan.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Mengembalikan item dalam senarai <code>list1</code> yang tidak muncul dalam senarai <code>list2</code>. Nilai pendua disokong.    Nilai kriteria persamaan pilihan, <code>equationCriteria</code>, boleh ditentukan untuk mengawal ujian persamaan. 


## Examples

### Example #1 
Cari item dalam senarai \{1, 2, 3, 4, 5} yang tidak muncul dalam \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Cari item dalam senarai \{1, 2} yang tidak muncul dalam \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
