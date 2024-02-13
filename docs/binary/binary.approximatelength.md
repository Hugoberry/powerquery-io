---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Returns the approximate length of the binary.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Returns the approximate length of <code>binary</code>, or an error if the data source doesn't support an approximate length.


## Examples

### Example #1 
Get the approximate length of the binary value.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
