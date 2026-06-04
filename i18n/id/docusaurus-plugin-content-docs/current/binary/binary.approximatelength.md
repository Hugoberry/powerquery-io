---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Menghasilkan perkiraan panjang biner.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Menghasilkan perkiraan panjang `binary`, atau kesalahan jika sumber data tidak mendukung perkiraan panjang.


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
