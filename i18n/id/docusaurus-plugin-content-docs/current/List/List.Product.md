---
title: List.Product
---

# List.Product


## Description

Menghasilkan produk bilangan dalam daftar.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Menghasilkan produk bilangan non-null dalam daftar, <code>numbersList</code>. Menghasilkan null jika tidak ada nilai non-null dalam daftar.


## Examples

### Example #1 
Mencari produk bilangan dalam daftar &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
