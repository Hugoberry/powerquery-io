---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Returnerar ett binärformat som läser en post.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Returnerar ett binärformat som läser en post. Parametern <code>record</code> anger formatet för posten. Fälten i posten kan ha olika binärformat. Om ett fält innehåller ett värde som inte är ett värde i binärformat läses inga data för det fältet och fältvärdet skickas som ett eko till resultatet.


## Examples

### Example #1 
Läs en post som innehåller ett 16-bitars heltal och ett 32-bitars heltal.
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
