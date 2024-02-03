---
title: BinaryFormat.ByteOrder
---

# BinaryFormat.ByteOrder


## Description

Возвращает двоичный формат с порядком следования байтов, указанным функцией.


## Syntax

```powerquery
BinaryFormat.ByteOrder(
    binaryFormat as function,
    byteOrder as ByteOrder.Type
) as function
```


## Details

Возвращает двоичный формат с порядком следования байтов, указанным <code>binaryFormat</code>.  Порядок байтов по умолчанию: <code>ByteOrder.BigEndian</code>.



## Category
Binary Formats.Controlling byte order
