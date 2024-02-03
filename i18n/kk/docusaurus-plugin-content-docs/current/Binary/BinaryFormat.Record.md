---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Жазбаны оқитын екілік пішімді қайтарады.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Жазбаны оқитын екілік пішімді қайтарады.  <code>record</code> параметрі жазбаның пішімін көрсетеді.  Жазбадағы әр өрістің екілік пішімі әр түрлі болады.  Егер өріс екілік пішімдегі мән емес мәнді қамтыса, онда сол өріс үшін деректер оқылмайды және өріс мәні нәтижеге шығарылады.


## Examples

### Example #1 
Бір 16 биттік бүтін санды және бір 32 биттік бүтін санды қамтитын жазбаны оқу.
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
