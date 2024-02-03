---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Vrátí binární formát, který čte záznam.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Vrátí binární formát, který čte záznam. Parametr <code>record</code> určuje binární formát záznamu. Každé pole v záznamu může mít jiný binární formát. Pokud pole obsahuje hodnotu, která není hodnotou binárního formátu, pro dané pole se nenačtou žádná data a hodnota pole bude pro výsledek opakována.


## Examples

### Example #1 
Přečíst záznam obsahující jedno 16bitové celé číslo a jedno 32bitové celé číslo.
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
