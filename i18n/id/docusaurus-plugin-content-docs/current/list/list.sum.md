---
title: List.Sum
---

# List.Sum


Menghasilkan penjumlahan item dalam daftar.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Menghasilkan penjumlahan nilai non-null dalam daftar, `list`. Menghasilkan null jika tidak ada nilai non-null dalam daftar.


## Examples

### Example #1
Mencari penjumlahan bilangan dalam daftar `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
