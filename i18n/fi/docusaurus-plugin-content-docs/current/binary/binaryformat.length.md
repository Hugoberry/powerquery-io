---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Palauttaa binaarimuodon, joka rajoittaa luettavissa olevien tietojen määrää.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Palauttaa binaarimuodon, joka rajoittaa luettavissa olevien tietojen määrää. Sekä `BinaryFormat.List` että `BinaryFormat.Binary` voidaan käyttää lukemiseen tietojen loppuun asti. `BinaryFormat.Length` voidaan käyttää luettavien tavujen määrän rajoittamiseen. Parametri `binaryFormat` määrittää rajoitettavan binaarimuodon. Parametri `length` määrittää luettavien tavujen määrän. Parametri `length` voi olla lukuarvo tai binaarimuotoarvo, joka määrittää luettavaa arvoa edeltävän pituusarvon muodon.


## Examples

### Example #1
Rajoita luettavien tavujen määräksi 2, kun luetaan tavuluetteloa.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Rajoita luettavien tavujen määrä tavuluetteloa luettaessa luetteloa edeltävään tavuarvoon.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
