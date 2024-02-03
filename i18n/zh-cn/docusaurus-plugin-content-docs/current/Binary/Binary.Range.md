---
title: Binary.Range
---

# Binary.Range


## Description

返回从偏移量开始的二进制值的子集。


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

返回从偏移量 <code>binary</code> 开始的二进制值的子集。可选参数 <code>offset</code> 用于设置该子集的最大长度。


## Examples

### Example #1 
返回从偏移量 6 开始的二进制值的子集。
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
返回从偏移量 6 开始、长度为 2 的二进制值的子集。
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
