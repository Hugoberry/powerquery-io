---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Returnează un format binar care limitează numărul de date care pot fi citite.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Returnează un format binar care limitează cantitatea de date care poate fi citită. Atât `BinaryFormat.List`, cât și `BinaryFormat.Binary` pot fi utilizate pentru citire până la sfârșitul datelor. `BinaryFormat.Length` se poate utiliza pentru a limita numărul de octeți care sunt citiți. Parametrul `binaryFormat` specifică formatul binar de limitat. Parametrul `length` specifică numărul de byți de citit. Parametrul `length` poate fi o valoare numerică sau o valoare binară a formatului, care specifică formatul valorii lungime ce apare înaintea valorii citite.


## Examples

### Example #1
Limitaţi numărul de octeţi citiţi la 2 la citirea unei liste de octeţi.
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
Limitați numărul de byți la citirea unei liste de byți la valoarea unui byte care apare înaintea listei.
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
