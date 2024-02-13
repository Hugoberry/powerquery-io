---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Retourneert een binaire indeling die de hoeveelheid gegevens beperkt die kan worden gelezen.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Retourneert een binaire indeling die de hoeveelheid gegevens beperkt die kan worden gelezen.  Zowel <code>BinaryFormat.List</code> als <code>BinaryFormat.Binary</code> kan worden gebruikt om tot het einde van de gegevens te lezen.  <code>BinaryFormat.Length</code> kan worden gebruikt om het aantal bytes te beperken dat wordt gelezen.  De parameter <code>binaryFormat</code> specificeert de binaire indeling die moet worden beperkt.  De parameter <code>length</code> specificeert het aantal bytes dat moet worden gelezen.  De parameter <code>length</code> kan een numerieke waarde of een waarde van een binaire indeling zijn die de indeling van de lengtewaarde definieert die verschijnt en voorafgaat aan de waarde die wordt gelezen.


## Examples

### Example #1 
Het aantal bytes dat wordt gelezen tot 2 beperken wanneer er een lijst met bytes wordt gelezen.
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
Beperk het aantal bytes dat wordt gelezen bij het lezen van een lijst met bytes tot de bytewaarde die voorafgaat aan de lijst.
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
