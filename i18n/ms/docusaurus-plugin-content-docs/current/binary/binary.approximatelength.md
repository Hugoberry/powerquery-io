---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Mengembalikan panjang anggaran binari.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Mengembalikan panjang anggaran bagi `binary`, atau ralat jika sumber data tidak menyokong panjang anggaran.


## Examples

### Example #1
Mengembalikan panjang anggaran bagi nilai binari.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
