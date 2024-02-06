---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


返回二进制文件的近似长度。


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

返回 <code>binary</code> 的近似长度，或者如果数据源不支持近似长度，则返回错误。


## Examples

### Example #1 
获取二进制值的近似长度。
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
