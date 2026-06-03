---
title: BinaryFormat.ByteOrder
---

# BinaryFormat.ByteOrder


Возвращает двоичный формат с порядком следования байтов, указанным функцией.


## Syntax

```powerquery
BinaryFormat.ByteOrder(
    binaryFormat as function,
    byteOrder as ByteOrder.Type
) as function
```


## Remarks

Возвращает двоичный формат с порядком следования байтов, указанным `binaryFormat`. Порядок байтов по умолчанию: `ByteOrder.BigEndian`.



## Category
Binary Formats.Controlling byte order
