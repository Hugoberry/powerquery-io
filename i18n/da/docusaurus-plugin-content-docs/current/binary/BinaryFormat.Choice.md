---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Returnerer et binært format, der vælger det næste binære format baseret på en værdi, der allerede er læst.


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

Returnerer et binært format, der vælger det næste binære format baseret på en værdi, der allerede er læst.  Den binære formatværdi, der frembringes af denne funktion, fungerer i faser:<ul><li>Det binære format, der er angivet af parameteren <code>binaryFormat</code>, bruges til at læse en værdi.</li><li>Den værdi, der overføres til valgfunktionen, som er angivet af parameteren <code>chooseFunction</code>.</li><li>Valgfunktionen inspicerer værdien og returnerer et andet binært format.</li><li>Det andet binære format bruges til at læse en anden værdi.</li><li>Hvis kombinationsfunktionen er angivet, overføres den første og anden værdi til kombinationsfunktionen, og resultatværdien returneres.</li><li>Hvis kombinationsfunktionen ikke er angivet, returneres den anden værdi.</li><li>Den anden værdi returneres.</li></ul>Den valgfrie parameter <code>type</code> angiver den type binært format, der returneres af valgfunktionen.  Der kan angives enten <code>type any</code>, <code>type list</code> eller <code>type binary</code>.  Hvis parameteren <code>type</code> ikke er angivet, bruges <code>type any</code>.   Hvis <code>type list</code> eller <code>type binary</code> bruges, kan systemet returnere en streaming <code>binary</code>- eller <code>list</code>-værdi i stedet for en værdi, der er gemt i bufferen, hvilket kan reducere den mængde hukommelse, der er nødvendig for at læse formatet.


## Examples

### Example #1 
Læs en liste over byte, hvor antallet af elementer bestemmes af den første byte.
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
Læs en liste over byte, hvor antallet af elementer bestemmes af den første byte, og bevar den først læste byte.
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
Læs en liste over byte, hvor antallet af elementer bestemmes af den første byte vha. en streamingliste.
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
