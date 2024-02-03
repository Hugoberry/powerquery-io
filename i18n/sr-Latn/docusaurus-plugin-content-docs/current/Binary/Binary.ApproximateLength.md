---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Vraća približnu dužinu binarnog zapisa.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Vraća približnu dužinu <code>binary</code>, ili grešku ako izvor podataka ne podržava približnu dužinu.


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
