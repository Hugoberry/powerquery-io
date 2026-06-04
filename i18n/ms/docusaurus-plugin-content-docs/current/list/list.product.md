---
title: List.Product
---

# List.Product


Mengembalikan hasil bagi nombor dalam senarai.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Mengembalikan hasil bagi nombor bukan nol dalam senarai, `numbersList`. Mengembalikan nombor jika terdapat nilai bukan nol dalam senarai.


## Examples

### Example #1
Cari hasil nombor dalam senarai `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
