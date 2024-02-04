---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Gibt ein Binärformat zurück, das einen Datensatz liest.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Gibt ein Binärformat zurück, das einen Datensatz liest.  Der Parameter "<code>record</code>" gibt das Format des Datensatzes an.  Jedes Feld im Datensatz kann ein anderes Binärformat besitzen.  Enthält ein Feld einen Wert, bei dem es sich nicht um einen Binärformatwert handelt, werden für dieses Feld keine Daten gelesen, und der Feldwert wird im Ergebnis ausgegeben.


## Examples

### Example #1 
Liest einen Datensatz mit einer 16-Bit-Ganzzahl und einer 32-Bit-Ganzzahl.
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
