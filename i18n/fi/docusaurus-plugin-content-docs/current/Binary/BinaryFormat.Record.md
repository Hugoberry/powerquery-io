---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Palauttaa binaarimuodon, joka lukee tietueen.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Palauttaa binaarimuodon, joka lukee tietueen.  Parametri <code>record</code> määrittää tietueen muodon.  Kullakin tietueen kentällä voi olla eri binaarimuoto.  Jos kenttä sisältää arvon, joka ei ole binaarimuotoarvo, mitään tietoja ei lueta kyseisen kentän kohdalla, ja arvo kaiutetaan tulokseen.


## Examples

### Example #1 
Lue tietue, joka sisältää yhden 16-bittisen kokonaisluvun ja yhden 32-bittisen kokonaisluvun.
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
