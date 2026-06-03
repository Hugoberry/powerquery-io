---
title: BinaryFormat.ByteOrder
---

# BinaryFormat.ByteOrder


Gibt ein Binärformat mit der durch eine Funktion angegebenen Bytereihenfolge zurück.


## Syntax

```powerquery
BinaryFormat.ByteOrder(
    binaryFormat as function,
    byteOrder as ByteOrder.Type
) as function
```


## Remarks

Gibt ein Binärformat mit der durch "`binaryFormat`" angegebenen Bytereihenfolge zurück. Die standardmäßige Bytereihenfolge lautet `ByteOrder.BigEndian`.



## Category
Binary Formats.Controlling byte order
