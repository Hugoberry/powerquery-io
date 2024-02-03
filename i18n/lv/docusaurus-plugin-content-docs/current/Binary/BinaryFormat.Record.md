---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Atgriež bināru formātu, kas satur ierakstu.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Atgriež bināru formātu, kas satur ierakstu.  Parametrs <code>record</code> norāda ieraksta formātu.  Katram ieraksta laukam var būt citāds binārais formāts.  Ja laukā ir vērtība, kas nav bināra formāta vērtība, tad attiecīgajam laukam netiek nolasīti nekādi dati, un rezultātā tiek izvadīta lauka vērtība.


## Examples

### Example #1 
Lasiet ierakstu, kurā ir viens 16 bitu veselais skaitlis un viens 32 bitu veselais skaitlis.
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
