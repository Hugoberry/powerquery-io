---
title: BinaryFormat.ByteOrder
---

# BinaryFormat.ByteOrder


Zwraca format binarny, w którym kolejność bajtów jest określona przez funkcję.


## Syntax

```powerquery
BinaryFormat.ByteOrder(
    binaryFormat as function,
    byteOrder as ByteOrder.Type
) as function
```


## Remarks

Zwraca format binarny, w którym kolejność bajtów jest określona przez parametr `binaryFormat`. Domyślna kolejność bajtów to `ByteOrder.BigEndian`.



## Category
Binary Formats.Controlling byte order
