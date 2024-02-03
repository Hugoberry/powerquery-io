---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Retorna un format binari que llegeix un registre.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Retorna un format binari que llegeix un registre.  El paràmetre <code>record</code> especifica el format del registre.  Cada camp del registre pot tenir un format binari diferent.  Si un camp conté un valor que no és un valor de format binari, no es llegeix cap dada per a aquest camp i el valor del camp es repeteix al resultat.


## Examples

### Example #1 
Llegeix un registre que conté un enter de 16 bits i un enter de 32 bits.
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
