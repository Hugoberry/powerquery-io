---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


傳回二進位的近似長度。


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

傳回 <code>binary</code> 中的近似長度，如果資料來源不支援近似長度，則傳回錯誤。


## Examples

### Example #1 
取得二進位的近似長度。
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
