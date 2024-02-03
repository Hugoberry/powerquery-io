---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Menghapus semua nilai &#34;null&#34; dari daftar yang ditetapkan.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Menghapus semua kemunculan nilai "null" dalam <code>list</code>. Jika tidak ada nilai 'null' dalam daftar, daftar asli akan dihasilkan.


## Examples

### Example #1 
Menghapus nilai &#34;null&#34; dari daftar \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
