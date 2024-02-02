---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Retourne un format binaire qui limite la quantité de données pouvant être lues.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Retourne un format binaire qui limite la quantité de données pouvant être lues.  <code>BinaryFormat.List</code> et <code>BinaryFormat.Binary</code> peuvent être utilisés pour lire la fin des données.  <code>BinaryFormat.Length</code> peut être utilisé pour limiter le nombre d'octets lus.  Le paramètre <code>binaryFormat</code> spécifie le format binaire à limiter.  Le paramètre <code>length</code> spécifie le nombre d'octets à lire.  Le paramètre <code>length</code> peut être une valeur numérique ou une valeur de format binaire qui spécifie le format de la valeur de longueur affichée qui précède la valeur en cours de lecture.


## Examples

### Example #1 
Limitez le nombre d&#39;octets lus à 2 lors de la lecture d&#39;une liste d&#39;octets.
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
Limitez le nombre d&#39;octets lus lors de la lecture d’une liste d&#39;octets, à la valeur d&#39;octet précédant la liste.
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
