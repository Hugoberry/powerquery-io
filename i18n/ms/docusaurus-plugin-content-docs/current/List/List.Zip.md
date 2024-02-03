---
title: List.Zip
---

# List.Zip


## Description

Mengembalikan satu senarai bagi beberapa senarai dengan menggabungkan item pada kedudukan yang sama dalam berbilang senarai.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Mengambil satu senarai bagi beberapa senarai, <code>lists</code> dan mengembalikan satu senarai bagi beberapa senarai yang menggabungkan item pada kedudukan yang sama.


## Examples

### Example #1 
Membuat zip untuk dua senarai mudah \{1, 2} dan \{3, 4}.
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
Membuat zip untuk dua senarai mudah bagi panjang yang berbeza \{1, 2} dan \{3}.
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
