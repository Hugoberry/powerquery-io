---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Vráti binárny formát obmedzujúci množstvo údajov, ktoré možno prečítať.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Vráti binárny formát obmedzujúci množstvo údajov, ktoré možno prečítať.  Na čítanie až do konca údajov možno použiť formát <code>BinaryFormat.List</code> aj <code>BinaryFormat.Binary</code>.  Hodnotu <code>BinaryFormat.Length</code> možno použiť na obmedzenie počtu prečítaných bajtov.  Parameter <code>binaryFormat</code> určuje binárny formát, ktorý sa má obmedziť.  Parameter <code>length</code> určuje počet bajtov, ktoré sa majú prečítať.  Parameter <code>length</code> môže byť buď číselná hodnota, alebo hodnota binárneho formátu, ktorá zadáva formát vyskytovanej hodnoty dĺžky, ktorá predchádza čítanú hodnotu.


## Examples

### Example #1 
Obmedzte počet prečítaných bajtov na hodnotu 2 pri čítaní zoznamu bajtov.
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
Obmedzte počet prečítaných bajtov pri čítaní zoznamu bajtov na hodnotu bajtov predchádzajúcu zoznam.
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
