---
title: BinaryFormat.List
---

# BinaryFormat.List


Vraća binarni format koji čita niz stavki i vraća listu.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Vraća binarni format koji čita niz stavki i vraća `list`. Parametar `binaryFormat` navodi binarni format svake stavke. Postoje tri načina da utvrdite broj pročitanih stavki:

-   Ako `countOrCondition` nije naveden, binarni format će očitavati sve dok ne preostane nijedna stavka.
-   Ako je `countOrCondition` broj, binarni format će pročitati toliko stavki.
-   Ako je `countOrCondition` funkcija, ta funkcija će biti pozvana za svaku pročitanu stavku. Funkcija vraća „true“ da bi nastavila, a „false“ da bi prestala da čita stavke. Poslednja stavka se nalazi na listi.
-   Ako je `countOrCondition` binarni format, očekuje se da će broj stavki prethoditi listi, a navedeni format se koristi za očitavanje broja.


## Examples

### Example #1
Čitanje bajtova do kraja podataka.
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
Čitanje dva bajta.
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
Čitanje bajtova dok vrednost bajta ne bude veća od dva ili jednaka dva.
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
