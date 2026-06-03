---
title: BinaryFormat.List
---

# BinaryFormat.List


Returnerer et binært format, der læser en sekvens af elementer og returnerer en liste.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Returnerer et binært format, der læser en sekvens af elementer og returnerer en `liste`. `binaryFormat`Parameteren angiver det binære format for hvert element. Der er tre metoder til at bestemme antallet af læste elementer:

-   Hvis `countOrCondition` ikke er angivet, læser det binære format, indtil der ikke er flere elementer.
-   Hvis `countOrCondition` er et tal, læser det binære format dette antal elementer.
-   Hvis `countOrCondition` er en funktion, aktiveres denne funktion for hvert læst element. Funktionen returnerer SAND for at fortsætte og FALSK for at stoppe læsning af elementer. Det sidste element inkluderes på listen.
-   Hvis `countOrCondition` er et binært format, forventes antallet af elementer at stå foran listen, og det angivne format bruges til at læse antallet.


## Examples

### Example #1
Læste byte indtil slutningen af dataene.
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
Læs to byte.
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
Læs byte, indtil byteværdien er større end eller lig med to.
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
