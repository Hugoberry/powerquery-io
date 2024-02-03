---
title: List.Transform
---

# List.Transform


## Description

Menghasilkan daftar nilai baru yang dihitung dari daftar ini.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Menghasilkan daftar nilai baru dengan menerapkan fungsi transformasi <code>transform</code> terhadap daftar, <code>list</code>.


## Examples

### Example #1 
Menambah 1 ke setiap nilai dalam daftar \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
