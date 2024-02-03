---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Mengalih keluar semua nilai &#34;nol&#34; daripada senarai yang ditentukan.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Mengalih keluar semua tika nilai "nol" dalam <code>list</code>. Jika tiada nilai 'nol' dalam senarai, senarai asal dikembalikan.


## Examples

### Example #1 
Mengalih keluar nilai &#34;nol&#34; daripada senarai \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
