---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Vraća približnu dužinu binarnog zapisa.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Vraća približnu dužinu `binary`, ili grešku ako izvor podataka ne podržava približnu dužinu.


## Examples

### Example #1
Preuzmite približnu dužinu binarne vrednosti.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
