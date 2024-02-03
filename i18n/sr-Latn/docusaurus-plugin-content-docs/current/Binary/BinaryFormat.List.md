---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Vraća binarni format koji čita niz stavki i vraća listu.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Vraća binarni format koji čita niz stavki i vraća <code>list</code>.  Parametar <code>binaryFormat</code> navodi binarni format svake stavke.  Postoje tri načina da utvrdite broj pročitanih stavki: <ul><li>Ako <code>countOrCondition</code> nije naveden, binarni format će očitavati sve dok ne preostane nijedna stavka.</li><li>Ako je <code>countOrCondition</code> broj, binarni format će pročitati toliko stavki.</li><li>Ako je <code>countOrCondition</code> funkcija, ta funkcija će biti pozvana za svaku pročitanu stavku.  Funkcija vraća „true“ da bi nastavila, a „false“ da bi prestala da čita stavke.  Poslednja stavka se nalazi na listi.</li><li>Ako je <code>countOrCondition</code> binarni format, očekuje se da će broj stavki prethoditi listi, a navedeni format se koristi za očitavanje broja.</li></ul>


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
