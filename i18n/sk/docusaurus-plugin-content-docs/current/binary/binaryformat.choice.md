---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


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


## Remarks

Vráti binárny formát, ktorý vyberie nasledujúci binárny formát na základe už prečítanej hodnoty. Hodnota binárneho formátu vytvorená touto funkciou funguje v etapách:

-   Binárny formát zadaný parametrom `binaryFormat` sa použije na prečítanie hodnoty.
-   Táto hodnota sa odovzdá funkcii výberu zadanej parametrom `chooseFunction`.
-   Funkcia výberu skontroluje hodnotu a vráti druhý binárny formát.
-   Druhý binárny formát sa použije na prečítanie druhej hodnoty.
-   Ak sa zadá funkcia kombinovania, prvá a druhá hodnota sa odovzdá funkcii kombinovania a vráti sa výsledná hodnota.
-   Ak funkcia kombinovania nie je zadaná, vráti sa druhá hodnota.
-   Vráti sa druhá hodnota.

Voliteľný parameter `type` označuje typ binárneho formátu, ktorý vráti funkcia výberu. Možno zadať buď typ `type any`, `type list`, alebo `type binary`. Ak parameter `type` nie je zadaný, použije sa typ `type any`. Ak sa použije typ `type list` alebo `type binary`, systém môže namiesto hodnoty uloženej do medzipamäte vrátiť hodnotu prúdu údajov `binary` alebo hodnotu `list`, čo môže zmenšiť množstvo pamäte potrebné na prečítanie formátu.


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
