---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Returnează un format binar care limitează numărul de date care pot fi citite.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Returnează un format binar care limitează cantitatea de date care poate fi citită.  Atât <code>BinaryFormat.List</code>, cât şi <code>BinaryFormat.Binary</code> pot fi utilizate pentru citire până la terminarea datelor,  <code>BinaryFormat.Length</code> poate fi utilizat pentru a limita numărul de byți care sunt citiți.  Parametrul <code>binaryFormat</code> specifică formatul binar de limitat.  Parametrul <code>length</code> specifică numărul de byți de citit.  Parametrul <code>length</code> poate fi o valoare numerică sau o valoare binară a formatului, care specifică formatul valorii lungime ce apare înaintea valorii citite.


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
