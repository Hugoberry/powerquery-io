---
title: List.Zip
---

# List.Zip


## Description

Menghasilkan daftar dengan menggabungkan item pada posisi yang sama dalam beberapa daftar.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Mengambil daftar dari beberapa daftar, <code>lists</code>, dan menghasilkan daftar dari beberapa daftar yang menggabungkan item pada posisi yang sama.


## Examples

### Example #1 
Membuat zip dua daftar sederhana \{1, 2} dan \{3, 4}.
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
Membuat zip dua daftar sederhana dari panjang yang berbeda \{1, 2} dan \{3}.
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
