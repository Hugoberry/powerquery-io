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

Returnerer et binært format, der vælger det næste binære format baseret på en værdi, der allerede er læst. Den binære formatværdi, der frembringes af denne funktion, fungerer i faser:

-   Det binære format, der er angivet af parameteren `binaryFormat`, bruges til at læse en værdi.
-   Den værdi, der overføres til valgfunktionen, som er angivet af parameteren `chooseFunction`.
-   Valgfunktionen inspicerer værdien og returnerer et andet binært format.
-   Det andet binære format bruges til at læse en anden værdi.
-   Hvis kombinationsfunktionen er angivet, overføres den første og anden værdi til kombinationsfunktionen, og resultatværdien returneres.
-   Hvis kombinationsfunktionen ikke er angivet, returneres den anden værdi.
-   Den anden værdi returneres.

Den valgfrie parameter `type` angiver den type binært format, der returneres af valgfunktionen. Der kan angives enten `type any`, `type list` eller `type binary`. Hvis parameteren `type` ikke er angivet, bruges `type any`. Hvis `type list` eller `type binary` bruges, kan systemet returnere en streaming `binary`\- eller `list`\-værdi i stedet for en værdi, der er gemt i bufferen, hvilket kan reducere den mængde hukommelse, der er nødvendig for at læse formatet.


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
