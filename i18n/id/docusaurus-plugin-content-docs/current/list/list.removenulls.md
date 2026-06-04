---
title: List.RemoveNulls
---

# List.RemoveNulls


Menghapus semua nilai "null" dari daftar yang ditetapkan.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Menghapus semua kemunculan nilai "null" dalam `list`. Jika tidak ada nilai 'null' dalam daftar, daftar asli akan dihasilkan.


## Examples

### Example #1
Menghapus nilai "null" dari daftar \{1, 2, 3, null, 4, 5, null, 6\}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
