---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Palauttaa binaarimuodon, joka rajoittaa luettavissa olevien tietojen määrää.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Palauttaa binaarimuodon, joka rajoittaa luettavissa olevien tietojen määrää.  Molempia kohteista <code>BinaryFormat.List</code> ja <code>BinaryFormat.Binary</code> voi käyttää tekemään lukeminen tietojen loppuun saakka.  Kohdetta <code>BinaryFormat.Length</code> voi käyttää rajoittamaan luettavien tavujen määrää.  Parametri <code>binaryFormat</code> määrittää rajoitettavan binaarimuodon.  Parametri <code>length</code> määrittää luettavien tavujen määrän.  Parametri <code>length</code> voi olla lukuarvo tai binaariarvo, joka määrittää olemassa olevan ja luettavaa arvoa ennen olevan pituusarvon muodon.


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
