---
title: List.Transform
---

# List.Transform


Mengembalikan senarai baru nilai yang dikira daripada senarai ini.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Mengembalikan senarai nilai baru dengan menggunakan fungsi transformasi `transform` pada senarai, `list`.


## Examples

### Example #1
Tambah 1 pada setiap nilai dalam senarai \{1, 2\}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
