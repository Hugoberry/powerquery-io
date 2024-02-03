---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Vraća binarni format koji čita zapis.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Vraća binarni format koji čita zapis.  Parametar <code>record</code> navodi format zapisa.  Svako polje u zapisu može da ima drugačiji binarni format.  Ako polje sadrži vrednost koja nije vrednost binarnog formata, za to polje se ne čitaju podaci, a vrednost polja se vraća rezultatu.


## Examples

### Example #1 
Čitanje zapisa koji sadrži jedan 16-bitni ceo broj i jedan 32-bitni ceo broj.
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
