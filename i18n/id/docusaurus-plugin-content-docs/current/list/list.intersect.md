---
title: List.Intersect
---

# List.Intersect


Menghasilkan interseksi nilai daftar yang ditemukan dalam input.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Menghasilkan interseksi nilai daftar yang ditemukan dalam daftar input `lists`. Parameter opsional, `equationCriteria`, dapat ditentukan.


## Examples

### Example #1
Mencari interseksi daftar \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
