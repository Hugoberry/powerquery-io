---
title: BinaryFormat.ByteOrder
---

# BinaryFormat.ByteOrder


## Description

以函数指定的字节顺序返回二进制格式。


## Syntax

```powerquery
BinaryFormat.ByteOrder(
    binaryFormat as function,
    byteOrder as ByteOrder.Type
) as function
```


## Details

返回具有 <code>binaryFormat</code> 指定的字节顺序的二进制格式。 默认字节顺序是 <code>ByteOrder.BigEndian</code>。



## Category
Binary Formats.Controlling byte order
