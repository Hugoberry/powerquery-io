---
title: List.Last
---

# List.Last


## Description

Mengembalikan nilai terakhir daripada senarai atau nilai lalai yang ditentukan jika kosong.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Mengembalikan item terakhir dalam senarai <code>list</code>, atau nilai lalai pilihan, <code>defaultValue</code>, jika senarai kosong.    Jika senarai adalah kosong dan nilai lalai tidak ditentukan, fungsi mengembalikan <code>null</code>.


## Examples

### Example #1 
Cari nilai terakhir dalam senarai \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Cari nilai terakhir dalam senarai \{} atau -1 jika ia kosong.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
