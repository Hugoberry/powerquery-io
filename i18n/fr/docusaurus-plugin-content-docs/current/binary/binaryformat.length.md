---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Retourne un format binaire qui limite la quantité de données pouvant être lues.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Renvoie un format binaire qui limite la quantité de données pouvant être lue. `BinaryFormat.List` et `BinaryFormat.Binary` peuvent tous deux être utilisés pour lire jusqu'à la fin des données. `BinaryFormat.Length` peut être utilisé pour limiter le nombre d'octets lus. Le paramètre `binaryFormat` spécifie le format binaire à limiter. Le paramètre `length` spécifie le nombre d'octets à lire. Le paramètre `length` peut être soit une valeur numérique, soit une valeur au format binaire spécifiant le format de la valeur de longueur qui précède la valeur en cours de lecture.


## Examples

### Example #1
Limitez le nombre d'octets lus à 2 lors de la lecture d'une liste d'octets.
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
Limitez le nombre d'octets lus lors de la lecture d’une liste d'octets, à la valeur d'octet précédant la liste.
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
