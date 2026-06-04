---
title: List.Sum
---

# List.Sum


Mengembalikan jumlah item dalam senarai.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Mengembalikan jumlah nilai bukan nol dalam senarai, `list`. Mengembalikan nombor jika terdapat nilai bukan nol dalam senarai.


## Examples

### Example #1
Cari jumlah nombor dalam senarai `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
