---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Vraća binarni format koji ograničava količinu podataka koje je moguće čitati.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Vraća binarni format koji ograničava količinu podataka koji se mogu pročitati.  Oba <code>BinaryFormat.List</code> i <code>BinaryFormat.Binary</code> mogu da se koriste za čitanje do kraja podataka.  <code>BinaryFormat.Length</code> može da se koristi za ograničavanje broja pročitanih bajtova.  Parametar <code>binaryFormat</code> navodi binarni format za ograničenje.  Parametar <code>length</code> navodi broj bajtova za čitanje.  Parametar <code>length</code> može biti brojčana vrednost ili vrednost binarnog formata koja navodi format vrednosti dužine koja se pojavljuje koji prethodi vrednosti koja se čita.


## Examples

### Example #1 
Ograničenje broja pročitanih bajtova na 2 prilikom čitanja liste bajtova.
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
Ograničite broj bajtova pročitanih prilikom čitanja liste bajtova na vrednost bajta koja prethodi listi.
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
