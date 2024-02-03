---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Atgriež bināru formātu, kas nolasa vienumu sekvenci un atgriež sarakstu.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Atgriež bināru formātu, kas satur vienumu secību un atgriež <code>sarakstu</code>. Parametrs <code>binaryFormat</code> norāda katra vienuma bināro formātu. Lasīto vienumu skaitu var noteikt trīs veidos. <ul><li>Ja vērtība <code>countOrCondition</code> nav norādīta, tad binārais formāts lasīs, līdz vairs nebūs vienumu.</li><li>Ja vērtība <code>countOrCondition</code> ir skaitlis, tad binārais formāts lasīs atbilstšu vienumu daudzumu.</li><li>Ja vērtība <code>countOrCondition</code> ir funkcija, tad šī funkcija tiks izsaukta katram lasītajam vienumam. Funkcija atgriež vērtību “patiess”, lai turpinātu, un vērtību “aplams”, lai pārtrauktu vienumu lasīšanu. Pēdējais vienums tiek iekļauts sarakstā.</li><li>Ja <code>countOrCondition</code> ir binārs formāts, tad tiek sagaidīts, ka vienumu skaits ir pirms saraksta, un skaita lasīšanai tiek izmantots norādītais formāts.</li></ul>


## Examples

### Example #1 
Lasīt baitus līdz datu beigām.
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
Lasīt divus baitus.
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
Lasīt baitus, līdz baitu vērtība ir lielāka par vai vienāda ar divi.
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
