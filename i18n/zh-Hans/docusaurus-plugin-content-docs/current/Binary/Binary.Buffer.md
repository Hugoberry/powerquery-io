---
title: Binary.Buffer
---

# Binary.Buffer


## Description

缓冲内存中的二进制值。


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

缓冲内存中的二进制值。 此调用的结果是一个稳定的二进制值，这意味着它将具有确定的字节长度和顺序。


## Examples

### Example #1 
创建二进制值的稳定版本。
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
