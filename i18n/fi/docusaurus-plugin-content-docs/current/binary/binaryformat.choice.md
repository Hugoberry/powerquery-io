---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Palauttaa binaarimuodon, joka valitsee seuraavan binaarimuodon jo luetun arvon perusteella.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

Palauttaa binaarimuodon, joka valitsee seuraavan binaarimuodon jo luetun arvon perusteella. Tämän funktion tarjoama binaarimuotoarvo toimii vaiheittain:

-   Parametrin `binaryFormat` määrittämää binaarimuotoa käytetään arvon lukemiseen.
-   Arvo välitetään parametrin `chooseFunction` määrittämällä choice-funktiolle.
-   Choice-funktio tutkii arvon ja palauttaa toisen binaarimuodon.
-   Toista binaarimuotoa käytetään toisen arvon lukemiseen.
-   Jos combine-funktio määritetään, ensimmäinen ja toinen arvo välitetään combine-funktiolle, ja tulokseksi saatava arvo palautetaan.
-   Jos combine-funktiota ei määritetä, toinen arvo palautetaan.
-   Toinen arvo palautetaan.

Valinnainen parametri `type` ilmaisee choice-funktion palauttaman binaarimuodon tyypin. Joko `type any`, `type list` tai `type binary` voidaan määrittää. Jos parametria `type` ei määritetä, käytetään kohdetta `type any`. Jos käytetään kohdetta `type list` tai `type binary`, järjestelmä saattaa pystyä palauttamaan virtautetun `binary`\- tai `list`\-arvon puskuroidun sijaan. Tämä saattaa pienentää muodon lukemiseen tarvittavan muistin määrää.


## Examples

### Example #1
Lue tavuluettelo, jossa ensimmäinen tavu määrittää elementtien määrän.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2
Lue tavuluettelo, jossa ensimmäinen tavu määrittää elementtien määrän, ja säilytä ensimmäinen luettu tavu.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3
Lue tavuluettelo, jossa ensimmäinen tavu määrittää elementtien määrän käyttämällä virtautusluetteloa.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
