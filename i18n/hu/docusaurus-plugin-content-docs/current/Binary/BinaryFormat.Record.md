---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Rekordot olvasó bináris formátumot ad vissza.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Rekordot olvasó bináris formátumot ad vissza. A(z) <code>record</code> paraméter határozza meg a rekord formátumát. A rekordban különbözhet az egyes mezők bináris formátuma. Ha egy mező olyan értéket tartalmaz, amely nem bináris formátumú érték, akkor annál a mezőnél nem történik adatolvasás, és a mezőérték jelenik meg az eredményben.


## Examples

### Example #1 
Egy 16 bites egész számot és egy 32 bites egész számot tartalmazó rekordot olvas.
```powerquery
let
    binaryData = #binary({
        0x00, 0x01,
        0x00, 0x00, 0x00, 0x02
    }),
    recordFormat = BinaryFormat.Record([
        A = BinaryFormat.UnsignedInteger16,
        B = BinaryFormat.UnsignedInteger32
    ])
in
    recordFormat(binaryData)
```

Result: 
```powerquery
[A = 1, B = 2]
```




## Category
Binary Formats.Reading records
