---
title: List.Last
---

# List.Last


## Description

Menghasilkan nilai terakhir dari daftar atau default yang ditetapkan jika kosong.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Menghasilkan item terakhir dalam daftar <code>list</code>, atau nilai default opsional, <code>defaultValue</code>, jika daftar kosong.    Jika daftar kosong dan nilai default tidak ditetapkan, maka fungsi akan menghasilkan <code>null</code>.


## Examples

### Example #1 
Mencari nilai terakhir dalam daftar \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Mencari nilai terakhir dalam daftar \{} atau -1 jika kosong.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
