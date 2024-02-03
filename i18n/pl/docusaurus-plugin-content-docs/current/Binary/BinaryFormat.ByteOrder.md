---
title: BinaryFormat.ByteOrder
---

# BinaryFormat.ByteOrder


## Description

Zwraca format binarny, w którym kolejność bajtów jest określona przez funkcję.


## Syntax

```powerquery
BinaryFormat.ByteOrder(
    binaryFormat as function,
    byteOrder as ByteOrder.Type
) as function
```


## Details

Zwraca format binarny, w którym kolejność bajtów jest określona przez parametr <code>binaryFormat</code>.  Domyślna kolejność bajtów to <code>ByteOrder.BigEndian</code>.



## Category
Binary Formats.Controlling byte order
