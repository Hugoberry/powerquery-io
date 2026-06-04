---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Vrátí binární formát omezující množství dat, které lze číst.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Vrátí binární formát omezující množství dat, které lze číst. Ke čtení až do konce dat lze použít `BinaryFormat.List` i `BinaryFormat.Binary`. `BinaryFormat.Length` lze použít k omezení počtu přečtených bajtů. Parametr `binaryFormat` určuje binární formát, který se má omezit. Parametr `length` určuje počet přečtených bajtů. Parametr `length` může být číselná hodnota nebo hodnota binárního formátu, která určuje formát délky zobrazené hodnoty, která předchází právě čtené hodnotě.


## Examples

### Example #1
Omezit počet čtených bajtů na 2 při čtení seznamu bajtů
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
Omezte počet čtených bajtů při čtení seznamu bajtů na hodnotu bajtu předcházející seznamu.
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
