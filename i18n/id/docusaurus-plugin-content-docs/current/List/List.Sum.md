---
title: List.Sum
---

# List.Sum


## Description

Menghasilkan penjumlahan item dalam daftar.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Menghasilkan penjumlahan nilai non-null dalam daftar, <code>list</code>.  Menghasilkan null jika tidak ada nilai non-null dalam daftar.


## Examples

### Example #1 
Mencari penjumlahan bilangan dalam daftar &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
