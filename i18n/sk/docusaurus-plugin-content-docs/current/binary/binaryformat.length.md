---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Vráti binárny formát obmedzujúci množstvo údajov, ktoré možno prečítať.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Vráti binárny formát obmedzujúci množstvo údajov, ktoré možno prečítať. Na čítanie až do konca údajov možno použiť `BinaryFormat.List` aj `BinaryFormat.Binary`. `BinaryFormat.Length` možno použiť na obmedzenie počtu načítaných bajtov. Parameter `binaryFormat` určuje binárny formát, ktorý sa má obmedziť. Parameter `length` určuje počet bajtov, ktoré sa majú prečítať. Parameter `length` môže byť buď číselná hodnota, alebo hodnota v binárnom formáte, ktorá určuje formát hodnoty dĺžky, ktorá sa zobrazuje pred čítanou hodnotou.


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
