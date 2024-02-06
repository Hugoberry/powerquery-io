---
title: BinaryFormat.Record
---

# BinaryFormat.Record


Retourneert een binaire indeling die een record leest.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Remarks

Retourneert een binaire indeling die een record leest.  De parameter <code>record</code> specificeert de indeling van de record.  Elk veld in de record kan een andere binaire indeling hebben.  Als een veld een waarde bevat die geen waarde van een binaire indeling is, worden er voor dat veld geen gegevens gelezen en wordt de veldwaarde teruggestuurd naar het resultaat.


## Examples

### Example #1 
Een record lezen dat één 16-bits geheel getal en één 32-bits geheel getal bevat.
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
