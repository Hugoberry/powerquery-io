---
title: List.RemoveRange
---

# List.RemoveRange


Menghapus jumlah nilai yang dimulai pada posisi yang ditetapkan.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Menghapus nilai `count` dalam `list` yang dimulai pada posisi yang ditetapkan, `index`.


## Examples

### Example #1
Menghapus 3 nilai dalam daftar \{1, 2, 3, 4, -6, -2, -1, 5\} yang dimulai pada indeks 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
