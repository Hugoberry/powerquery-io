---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

Vráti binárny formát, ktorý vyberie nasledujúci binárny formát na základe už prečítanej hodnoty.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Details

Vráti binárny formát, ktorý vyberie nasledujúci binárny formát na základe už prečítanej hodnoty.  Hodnota binárneho formátu vytvorená touto funkciou funguje v etapách:<ul><li>Binárny formát zadaný parametrom <code>binaryFormat</code> sa použije na prečítanie hodnoty.</li><li>Táto hodnota sa odovzdá funkcii výberu zadanej parametrom <code>chooseFunction</code>.</li><li>Funkcia výberu skontroluje hodnotu a vráti druhý binárny formát.</li><li>Druhý binárny formát sa použije na prečítanie druhej hodnoty.</li><li>Ak sa zadá funkcia kombinovania, prvá a druhá hodnota sa odovzdá funkcii kombinovania a vráti sa výsledná hodnota.</li><li>Ak funkcia kombinovania nie je zadaná, vráti sa druhá hodnota.</li><li>Vráti sa druhá hodnota.</li></ul>Voliteľný parameter <code>type</code> označuje typ binárneho formátu, ktorý vráti funkcia výberu.  Možno zadať buď typ <code>type any</code>, <code>type list</code>, alebo <code>type binary</code>.  Ak parameter <code>type</code> nie je zadaný, použije sa typ <code>type any</code>.   Ak sa použije typ <code>type list</code> alebo <code>type binary</code>, systém môže namiesto hodnoty uloženej do medzipamäte vrátiť hodnotu prúdu údajov <code>binary</code> alebo hodnotu <code>list</code>, čo môže zmenšiť množstvo pamäte potrebné na prečítanie formátu.


## Examples

### Example #1 
Prečítajte zoznam bajtov, v ktorom je počet prvkov určený prvým bajtom.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2 
Prečítajte zoznam bajtov, v ktorom je počet prvkov určený prvým bajtom, a zachovajte prvý prečítaný bajt.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3 
Prečítajte zoznam bajtov, v ktorom je počet prvkov určený prvým bajtom, a to pomocou zoznamu prúdu údajov.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
