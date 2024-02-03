---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Vrátí binární formát omezující množství dat, které lze číst.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Vrátí binární formát omezující množství dat, které lze číst. Funkce <code>BinaryFormat.List</code> a <code>BinaryFormat.Binary</code> lze použít ke čtení až na konec dat. Funkci <code>BinaryFormat.Length</code> lze použít k omezení počtu bajtů, které se mají číst. Parametr <code>binaryFormat</code> určuje binární formát, který má být omezen. Parametr <code>length</code> určuje počet bajtů ke čtení. Parametr <code>length</code> může být číselná hodnota nebo hodnota binárního formátu. Určuje formát délky zobrazené hodnoty, která předchází právě čtené hodnotě.


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
