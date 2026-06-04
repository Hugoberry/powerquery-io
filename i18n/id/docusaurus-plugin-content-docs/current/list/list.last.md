---
title: List.Last
---

# List.Last


Menghasilkan nilai terakhir dari daftar atau default yang ditetapkan jika kosong.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Menghasilkan item terakhir dalam daftar yang ditentukan, atau nilai default opsional jika daftar kosong.

-   `list`: Daftar yang akan diperiksa.
-   `defaultValue`: (Opsional) Nilai default yang akan dikembalikan jika daftar kosong. Jika daftar kosong dan nilai default tidak ditentukan, fungsi mengembalikan `null`.


## Examples

### Example #1
Mencari nilai terakhir dalam daftar \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Mencari nilai terakhir dalam daftar \{\} atau -1 jika kosong.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
