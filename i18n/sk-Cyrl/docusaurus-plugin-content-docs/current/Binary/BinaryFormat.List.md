---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Vráti binárny formát, ktorý načíta postupnosť položiek a vráti zoznam.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Vráti binárny formát, ktorý prečíta postupnosť položiek a vráti hodnotu <code>list</code>.  Parameter <code>binaryFormat</code> zadá binárny formát každej položky.  Existujú tri spôsoby určenia počtu prečítaných položiek: <ul><li>Ak parameter <code>countOrCondition</code> nie je zadaný, potom binárny formát bude čítať, až kým nezostanú žiadne ďalšie položky.</li><li>Ak parameter <code>countOrCondition</code> je číslo, potom binárny formát bude čítať taký počet položiek.</li><li>Ak parameter <code>countOrCondition</code> je funkcia, potom táto funkcia bude vyvolaná pre každú prečítanú položku.  Funkcia vráti hodnotu True v prípade pokračovania a hodnotu False v prípade zastavenia čítania položiek.  Posledná položka je zahrnutá v zozname.</li><li>Ak parameter <code>countOrCondition</code> je binárnym formátom, potom sa očakáva, že príslušný počet položiek bude predchádzať zoznam, a zadaný formát sa použije na prečítanie počtu.</li></ul>


## Examples

### Example #1 
Prečítajte bajty až do konca údajov.
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
Prečítajte dva bajty.
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
Čítajte bajty, až kým hodnota bajtu nie je väčšia ako alebo rovná hodnote dva.
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
