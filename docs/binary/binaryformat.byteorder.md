---
title: BinaryFormat.ByteOrder
---

# BinaryFormat.ByteOrder


Returns a binary format with the byte order specified by a function.


## Syntax

```powerquery
BinaryFormat.ByteOrder(
    binaryFormat as function,
    byteOrder as ByteOrder.Type
) as function
```


## Remarks

Returns a binary format with the byte order specified by `binaryFormat`. The default byte order is `ByteOrder.BigEndian`.



## Category
Binary Formats.Controlling byte order
