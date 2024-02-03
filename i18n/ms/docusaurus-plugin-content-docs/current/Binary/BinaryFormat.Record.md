---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Mengembalikan format perduaan yang membaca rekod.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Mengembalikan format perduaan yang membaca rekod.  Parameter <code>record</code> menentukan format bagi rekod.  Setiap medan dalam rekod boleh mempunyai format perduaan berlainan.  Jika medan mengandungi nilai yang bukan nilai format perduaan, maka tiada data dibaca untuk medan tersebut dan nilai medan digambarkan dalam hasil.


## Examples

### Example #1 
Baca rekod yang mengandungi satu integer 16 bit dan satu integer 32 bit.
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
