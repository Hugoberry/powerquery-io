---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Atgriež binārā objekta aptuveno garumu.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Atgriež aptuveno <code>binary</code> garumu vai kļūdu, ja datu avots neatbalsta aptuveno garumu.


## Examples

### Example #1 
Iegūst binārās vērtības aptuveno garumu.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
