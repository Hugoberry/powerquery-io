---
title: List.Product
---

# List.Product


Menghasilkan produk bilangan dalam daftar.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Menghasilkan produk bilangan non-null dalam daftar, `numbersList`. Menghasilkan null jika tidak ada nilai non-null dalam daftar.


## Examples

### Example #1
Mencari produk bilangan dalam daftar `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
