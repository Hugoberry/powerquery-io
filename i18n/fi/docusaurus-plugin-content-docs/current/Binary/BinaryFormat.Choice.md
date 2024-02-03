---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

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


## Details

Palauttaa binaarimuodon, joka valitsee seuraavan binaarimuodon jo luetun arvon perusteella.  Tämän funktion tarjoama binaarimuotoarvo toimii vaiheittain:<ul><li>Parametrin <code>binaryFormat</code> määrittämää binaarimuotoa käytetään arvon lukemiseen.</li><li>Arvo välitetään parametrin <code>chooseFunction</code> määrittämällä choice-funktiolle.</li><li>Choice-funktio tutkii arvon ja palauttaa toisen binaarimuodon.</li><li>Toista binaarimuotoa käytetään toisen arvon lukemiseen.</li><li>Jos combine-funktio määritetään, ensimmäinen ja toinen arvo välitetään combine-funktiolle, ja tulokseksi saatava arvo palautetaan.</li><li>Jos combine-funktiota ei määritetä, toinen arvo palautetaan.</li><li>Toinen arvo palautetaan.</li></ul>Valinnainen parametri <code>type</code> ilmaisee choice-funktion palauttaman binaarimuodon tyypin.  Joko <code>type any</code>, <code>type list</code> tai <code>type binary</code> voidaan määrittää.  Jos parametria <code>type</code> ei määritetä, käytetään kohdetta <code>type any</code>.   Jos käytetään kohdetta <code>type list</code> tai <code>type binary</code>, järjestelmä saattaa pystyä palauttamaan virtautetun <code>binary</code>- tai <code>list</code>-arvon puskuroidun sijaan. Tämä saattaa pienentää muodon lukemiseen tarvittavan muistin määrää.


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
