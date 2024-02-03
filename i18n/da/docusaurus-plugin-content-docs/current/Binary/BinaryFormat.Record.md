---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Returnerer et binært format, der læser en post.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Returnerer et binært format, der læser en post.  Parameteren <code>record</code> angiver det binære format for posten.  Hvert felt i posten kan have sit eget binære format.  Hvis et felt indeholder en værdi, der ikke er en binær formatværdi, læses der ingen data for feltet, og feltværdien angives som ekko til resultatet.


## Examples

### Example #1 
Læs en post, der indeholder ét 16-bit heltal og ét 32-bit heltal.
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
