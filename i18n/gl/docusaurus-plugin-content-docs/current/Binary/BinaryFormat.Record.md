---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Devolve un formato binario que le un rexistro.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Devolve un formato binario que le un rexistro.  O parámetro <code>record</code> especifica o formato do rexistro.  Cada campo do rexistro pode ter un formato binario distinto.  Se un campo contén un valor que non é un valor de formato binario, entón non se len datos deste campo e amósase o valor do campo no resultado.


## Examples

### Example #1 
Ler un rexistro que contén un enteiro de 16 bits e un enteiro de 32 bits.
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
