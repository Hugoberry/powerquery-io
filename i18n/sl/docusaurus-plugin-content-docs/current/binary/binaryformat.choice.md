---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Vrne dvojiško obliko, ki izbere naslednjo dvojiško obliko glede na vrednost, ki je že prebrana.


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

Vrne dvojiško obliko, ki izbere naslednjo dvojiško obliko glede na vrednost, ki je že prebrana. Vrednost dvojiške oblike, ki jo ustvari ta funkcija, deluje v stopnjah:

-   Za branje vrednosti se uporabi dvojiška oblika, ki jo določi parameter `binaryFormat`.
-   Vrednost se posreduje funkciji izbire, ki jo določa parameter `chooseFunction`.
-   Funkcija izbire pregleda vrednost in vrne drugo dvojiško obliko.
-   Za branje druge vrednosti se uporabi druga dvojiška oblika.
-   Če je določena funkcija združitve, se prva in druga vrednost posredujeta funkciji združitve, vrne pa se nastala vrednost.
-   Če funkcija združitve ni določena, se vrne druga vrednost.
-   Vrne se druga vrednost.

Izbirni parameter `type` določa vrsto dvojiške oblike, ki jo bo vrnila funkcija združitve. Določi se lahko `type any`, `type list` ali `type binary`. Če parameter `type` ni določen, se uporabi `type any`. Če se uporabi `type list` ali `type binary`, lahko sistem vrne pretočno vrednost `binary` ali `list` namesto medpomnjene, kar lahko zmanjša količino pomnilnika, ki je potrebna za branje oblike.


## Examples

### Example #1
Preberite seznam bajtov, kjer število elementov določa prvi bajt.
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
Preberite seznam bajtov, kjer število elementov določa prvi bajt, in ohranite branje prvega bajta.
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
Preberite seznam bajtov, kjer število elementov določa prvi bajt s pretočnim seznamom.
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
