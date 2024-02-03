---
title: List.Combine
---

# List.Combine


## Description

Menghasilkan daftar tunggal dengan menggabungkan beberapa daftar.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Mengambil daftar berisi daftar, <code>lists</code>, lalu menggabungkannya dalam satu daftar baru.


## Examples

### Example #1 
Menggabungkan dua daftar sederhana \{1, 2} dan \{3, 4}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Menggabungkan kedua daftar, \{1, 2} dan \{3, \{4, 5}}, yang salah satunya berisi daftar bersarang.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
