---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Palauttaa binaarimuodon, joka lukee tekstiarvon.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Palauttaa binaarimuodon, joka lukee tekstiarvon. `length` määrittää niiden tavujen määrän, joiden koodaus puretaan, tai tekstiä edeltävän pituuden binaarimuodossa. Valinnainen kohteen `encoding` arvo määrittää tekstin koodauksen. Jos kohdetta `encoding` ei määritetä, koodaus selvitetään Unicode-tavujärjestysmerkinnöistä. Jos tavujärjestysmerkkejä ei ole, käytetään kohdetta `TextEncoding.Utf8`.


## Examples

### Example #1
Dekoodaa kaksi tavua ASCII-tekstinä.
```powerquery
let
    binaryData = #binary({65, 66, 67}),
    textFormat = BinaryFormat.Text(2, TextEncoding.Ascii)
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```


### Example #2
Pura koodaus ASCII-tekstistä, jossa tekstin pituus tavuina on ennen tekstiä tavuna.
```powerquery
let
    binaryData = #binary({2, 65, 66}),
    textFormat = BinaryFormat.Text(
        BinaryFormat.Byte,
        TextEncoding.Ascii
    )
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```




## Category
Binary Formats.Reading text
