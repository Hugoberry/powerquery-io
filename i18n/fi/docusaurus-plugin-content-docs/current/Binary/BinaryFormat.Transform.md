---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Palauttaa binaarimuodon, joka muuntaa toisen binaarimuodon lukemat arvot.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Palauttaa binaarimuodon, joka muuntaa toisen binaarimuodon lukemat arvot.  Parametri <code>binaryFormat</code> määrittää binaarimuodon, jota käytetään arvon lukemiseen.  <code>function</code> käynnistetään käyttäen luettua arvoa, ja se palauttaa muunnetun arvon.


## Examples

### Example #1 
Lue tavu ja lisää siihen yksi.
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
