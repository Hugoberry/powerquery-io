---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


İkilinin yaklaşık uzunluğunu döndürür.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Veri kaynağı yaklaşık bir uzunluğu desteklemiyorsa, yaklaşık <code>binary</code> uzunluğunu veya bir hata döndürür.


## Examples

### Example #1 
İkili değerin yaklaşık uzunluğunu alın.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
