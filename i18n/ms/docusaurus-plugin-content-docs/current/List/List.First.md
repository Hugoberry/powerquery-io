---
title: List.First
---

# List.First


## Description

Mengembalikan nilai pertama daripada senarai atau nilai lalai yang ditentukan jika kosong.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Mengembalikan item pertama dalam senarai <code>list</code>, atau nilai lalai pilihan, <code>defaultValue</code>, jika senarai kosong.    Jika senarai adalah kosong dan nilai lalai tidak ditentukan, fungsi mengembalikan <code>null</code>.


## Examples

### Example #1 
Cari nilai pertama dalam senarai \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Cari nilai pertama dalam senarai \{}. Jika senarai kosong, kembalikan -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
