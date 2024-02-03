---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Menghasilkan perkiraan panjang biner.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Menghasilkan perkiraan panjang <code>binary</code>, atau kesalahan jika sumber data tidak mendukung perkiraan panjang.


## Examples

### Example #1 
Dapatkan perkiraan panjang nilai biner.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
