---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Palauttaa binaarimuodon, joka lukee sarjan kohteita ja palauttaa luettelon.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Palauttaa binaarimuodon, joka lukee kohdejonon ja palauttaa <code>luettelon</code>. Parametri <code>binaryFormat</code> määrittää kunkin kohteen binaarimuodon. Luettavien kohteiden määrän voi määrittää kolmella tapaa: <ul><li>Jos kohdetta <code>countOrCondition</code> ei määritetä, binaarimuotoa luetaan, kunnes kohteita ei ole enää jäljellä.</li><li>Jos <code>countOrCondition</code> on luku, binaarimuoto lukee kyseisen määrän kohteita.</li><li>Jos <code>countOrCondition</code> on funktio, kyseinen funktio käynnistetään kullekin luetulle kohteelle.  Funktio palauttaa arvon true, jos lukemista jatketaan, ja false, jos kohteiden lukeminen lopetetaan.  Viimeinen kohde sisältyy luetteloon.</li><li>Jos <code>countOrCondition</code> on binaarimuoto, kohteiden määrän odotetaan sijaitsevan ennen luetteloa, ja määritettyä muotoa käytetään määrän lukemiseen.</li></ul>


## Examples

### Example #1 
Lue tavuja tietojen loppuun saakka.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Lue kaksi tavua.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3 
Lue tavuja, kunnes tavuarvo on vähintään kaksi.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
