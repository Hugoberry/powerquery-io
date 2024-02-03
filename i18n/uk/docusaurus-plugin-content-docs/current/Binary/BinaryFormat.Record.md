---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Повертає двійковий формат, який читає запис.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Повертає двійковий формат, який читає запис.  Параметр <code>record</code> указує формат запису.  Кожне поле в записі може мати різний двійковий формат.  Якщо поле містить значення, що не є двійковим, для цього поля не читаються жодні дані та в результаті відображається значення поля.


## Examples

### Example #1 
Читання запису, який містить одне 16-розрядне та одне 32-розрядне ціле число.
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
