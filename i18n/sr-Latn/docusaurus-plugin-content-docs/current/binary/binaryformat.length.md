---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Vraća binarni format koji ograničava količinu podataka koje je moguće čitati.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Vraća binarni format koji ograničava količinu podataka koji se mogu pročitati. I `BinaryFormat.List` i `BinaryFormat.Binary` mogu da se koriste za čitanje do kraja podataka. `BinaryFormat.Length` može da se koristi za ograničavanje broja pročitanih bajtova. Parametar `binaryFormat` navodi binarni format za ograničenje. Parametar `length` navodi broj bajtova za čitanje. Parametar `length` može biti brojčana vrednost ili vrednost binarnog formata koja navodi format vrednosti dužine koja se pojavljuje koji prethodi vrednosti koja se čita.


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
