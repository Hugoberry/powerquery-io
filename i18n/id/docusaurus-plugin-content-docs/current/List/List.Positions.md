---
title: List.Positions
---

# List.Positions


## Description

Menghasilkan daftar offset untuk input.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Mengembalikan daftar offset untuk daftar input <code>list</code>.     Bila menggunakan List.Transform untuk mengubah daftar, daftar posisi dapat digunakan untuk memberikan akses transformasi ke posisi.


## Examples

### Example #1 
Mencari offset nilai dalam daftar \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
