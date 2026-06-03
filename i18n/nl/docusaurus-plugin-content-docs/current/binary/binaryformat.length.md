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

Retourneert een binaire indeling die de hoeveelheid gegevens beperkt die kan worden gelezen. Zowel `BinaryFormat.List` als `BinaryFormat.Binary` kunnen worden gebruikt om de gegevens te lezen tot het einde van de gegevens. `BinaryFormat.Length` kan worden gebruikt om het aantal gelezen bytes te beperken. De parameter `binaryFormat` specificeert de binaire indeling die moet worden beperkt. De parameter `length` specificeert het aantal bytes dat moet worden gelezen. De parameter `length` kan een numerieke waarde of een waarde van een binaire indeling zijn die de indeling van de lengtewaarde definieert die verschijnt en voorafgaat aan de waarde die wordt gelezen.


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
