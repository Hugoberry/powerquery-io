---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Menghasilkan format biner yang membaca data.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Menghasilkan format biner yang membaca data.  Parameter <code>record</code> akan menetapkan format data.  Setiap bidang dalam data dapat memiliki format biner berbeda.  Jika bidang berisi nilai yang bukan berupa nilai format biner, maka tidak ada data yang dibaca untuk bidang tersebut, dan nilai bidang akan bergaung ke hasil.


## Examples

### Example #1 
Membaca data yang berisi satu bilangan bulat 16-bit dan satu bilangan bulat 32-bit.
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
