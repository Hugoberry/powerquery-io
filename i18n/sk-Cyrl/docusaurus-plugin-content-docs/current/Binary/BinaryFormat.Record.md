---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Vráti binárny formát, ktorý prečíta záznam.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Vráti binárny formát, ktorý prečíta záznam.  Parameter <code>record</code> určuje formát záznamu.  Každé pole v zázname môže mať iný binárny formát.  Ak pole obsahuje hodnotu, ktorá nie je hodnotou binárneho formátu, tak pre toto pole sa neprečítajú žiadne údaje a hodnota poľa sa zobrazí vo výsledku.


## Examples

### Example #1 
Prečítajte záznam obsahujúci jedno 16-bitové celé číslo a jedno 32-bitové celé číslo.
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
