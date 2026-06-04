---
title: BinaryFormat.List
---

# BinaryFormat.List


Vrne dvojiško obliko, ki bere zaporedje elementov in vrne seznam.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Vrne dvojiško obliko, ki bere zaporedje elementov in vrne `seznam`. Parameter `binaryFormat` določa dvojiško obliko posameznega elementa. Možni so trije načini za določitev števila prebranih elementov:

-   če `countOrCondition` ni določen, bo dvojiška oblika brala, dokler ne zmanjka elementov.
-   Če je `countOrCondition` število, bo dvojiška oblika prebrala toliko elementov.
-   Če je `countOrCondition` funkcija, bo ta funkcija priklicana za vsak prebran element. Ta funkcija vrne"true"za nadaljevanje in"false"za zaustavitev branja elementov. Končni element je vključen na seznam.
-   Če je `countOrCondition` dvojiška oblika, se pričakuje, da bo pred seznamom število elementov, določena oblika zapisa pa bo uporabljena za branje števila.


## Examples

### Example #1
Berite bajte do konca podatkov.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Preberite dva bajta.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3
Berite bajte, dokler ni vrednost bajtov večja ali enaka dva.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
