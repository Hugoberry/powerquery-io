---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Vrne dvojiško obliko, ki bere zapis.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Vrne dvojiško obliko, ki bere zapis.  Parameter <code>record</code> določa obliko zapisa.  Vsako polje v zapisu lahko ima drugačno dvojiško obliko.  Če polje vsebuje vrednost, ki ni vrednost dvojiške oblike, se podatki za to polje ne berejo, v rezultatu pa se kot odmev prikaže vrednost polja.


## Examples

### Example #1 
Preberite zapis, ki vsebuje eno 16-bitno celo število in eno 32-bitno celo število.
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
