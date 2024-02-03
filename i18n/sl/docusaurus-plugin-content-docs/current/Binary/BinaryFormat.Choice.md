---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

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


## Details

Vrne dvojiško obliko, ki izbere naslednjo dvojiško obliko glede na vrednost, ki je že prebrana.  Vrednost dvojiške oblike, ki jo ustvari ta funkcija, deluje v stopnjah:<ul><li>Za branje vrednosti se uporabi dvojiška oblika, ki jo določi parameter <code>binaryFormat</code>.</li><li>Vrednost se posreduje funkciji izbire, ki jo določa parameter <code>chooseFunction</code>.</li><li>Funkcija izbire pregleda vrednost in vrne drugo dvojiško obliko.</li><li>Za branje druge vrednosti se uporabi druga dvojiška oblika.</li><li>Če je določena funkcija združitve, se prva in druga vrednost posredujeta funkciji združitve, vrne pa se nastala vrednost.</li><li>Če funkcija združitve ni določena, se vrne druga vrednost.</li><li>Vrne se druga vrednost.</li></ul>Izbirni parameter <code>type</code> določa vrsto dvojiške oblike, ki jo bo vrnila funkcija združitve.  Določi se lahko <code>type any</code>, <code>type list</code> ali <code>type binary</code>.  Če parameter <code>type</code> ni določen, se uporabi <code>type any</code>.   Če se uporabi <code>type list</code> ali <code>type binary</code>, lahko sistem vrne pretočno vrednost <code>binary</code> ali <code>list</code> namesto medpomnjene, kar lahko zmanjša količino pomnilnika, ki je potrebna za branje oblike.


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
