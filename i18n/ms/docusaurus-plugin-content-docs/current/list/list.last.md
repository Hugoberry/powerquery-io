---
title: List.Last
---

# List.Last


Mengembalikan nilai terakhir daripada senarai atau nilai lalai yang ditentukan jika kosong.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Mengembalikan item terakhir dalam senarai yang ditentukan, atau nilai lalai pilihan jika senarai kosong.

-   `list`: Senarai untuk diperiksa.
-   `defaultValue`: (Pilihan) Nilai lalai yang dikembalikan jika senarai kosong. Jika senarai kosong dan nilai lalai tidak ditentukan, fungsi mengembalikan `nol`.


## Examples

### Example #1
Cari nilai terakhir dalam senarai \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Cari nilai terakhir dalam senarai \{\} atau -1 jika ia kosong.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
