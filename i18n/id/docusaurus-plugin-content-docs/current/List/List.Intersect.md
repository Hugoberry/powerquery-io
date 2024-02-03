---
title: List.Intersect
---

# List.Intersect


## Description

Menghasilkan interseksi nilai daftar yang ditemukan dalam input.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Menghasilkan interseksi nilai daftar yang ditemukan dalam daftar input <code>lists</code>. Parameter opsional, <code>equationCriteria</code>, dapat ditentukan.


## Examples

### Example #1 
Mencari interseksi daftar \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
