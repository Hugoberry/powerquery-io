---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Bináris formátumot ad vissza, amely korlátozza az olvasható adatok mennyiségét.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Bináris formátumot ad vissza, amely korlátozza az olvasható adatok mennyiségét. A <code>BinaryFormat.List</code> és a <code>BinaryFormat.Binary</code> függvény is használható az olvasáshoz az adatok végéig. A <code>BinaryFormat.Length</code> használatával korlátozható az olvasandó bájtok száma. A(z) <code>binaryFormat</code> paraméter határozza meg a korlátozandó bináris formátumot. A(z) <code>length</code> paraméter határozza meg az olvasandó bájtok számát. A(z) <code>length</code> paraméter lehet számérték, illetve bináris formátumot jelző érték, amely meghatározza az olvasott érték előtt található hosszúságérték formátumát.


## Examples

### Example #1 
2-re korlátozza az olvasott bájtok számát a bájtlisták olvasásakor.
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
A listát megelőző bájtértékre korlátozza az olvasott bájtok számát a bájtlisták olvasásakor.
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
