---
title: BinaryFormat.List
---

# BinaryFormat.List


Palauttaa binaarimuodon, joka lukee sarjan kohteita ja palauttaa luettelon.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Palauttaa binaarimuodon, joka lukee kohdejonon ja palauttaa `luettelon`. Parametri `binaryFormat` määrittää kunkin kohteen binaarimuodon. Luettavien kohteiden määrän voi määrittää kolmella tapaa:

-   Jos kohdetta `countOrCondition` ei määritetä, binaarimuotoa luetaan, kunnes kohteita ei ole enää jäljellä.
-   Jos `countOrCondition` on luku, binaarimuoto lukee kyseisen määrän kohteita.
-   Jos `countOrCondition` on funktio, kyseinen funktio käynnistetään kullekin luetulle kohteelle. Funktio palauttaa arvon true, jos lukemista jatketaan, ja false, jos kohteiden lukeminen lopetetaan. Viimeinen kohde sisältyy luetteloon.
-   Jos `countOrCondition` on binaarimuoto, kohteiden määrän odotetaan sijaitsevan ennen luetteloa, ja määritettyä muotoa käytetään määrän lukemiseen.


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
