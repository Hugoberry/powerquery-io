---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Restituisce un formato binario che legge un record.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Restituisce un formato binario che legge un record.  Il parametro <code>record</code> specifica il formato binario del record.  Ogni campo del record può avere un formato binario diverso.  Se un campo contiene un valore che non è un valore di formato binario, non viene letto alcun dato per il campo e il valore del campo è ripetuto nel risultato.


## Examples

### Example #1 
Leggere un record contenente un Integer a 16 bit e un Integer a 32 bit.
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
