---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

Atgriež bināru formātu, kas izvēlas nākamo bināro formātu, ņemot vērā jau nolasītu vērtību.


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

Atgriež bināru formātu, kas izvēlas nākamo bināro formātu, ņemot vērā jau nolasītu vērtību.  Ar šo funkciju izveidotā binārā formāta vērtība darbojas pakāpeniski:<ul><li>Vērtības nolasīšanai tiek izmantots ar parametru <code>binaryFormat</code> norādītais binārais formāts.</li><li>Šī vērtība tiek nodota izvēlētajai funkcijai, ko norādīja parametrs <code>chooseFunction</code>.</li><li>Izvēlētā funkcija pārbauda vērtību un atgriež otru bināro formātu.</li><li>Otrs binārais formāts tiek izmantots otras vērtības nolasīšanai.</li><li>Ja ir norādīta kombinēšanas funkcija, tad pirmā un otrā vērtība tiek nodota kombinēšanas funkcijai un tiek atgriezta rezultāta vērtība.</li><li>Ja kombinēšanas funkcija nav norādīta, tiek atgriezta otrā vērtība.</li><li>Tiek atgriezta otrā vērtība.</li></ul>Neobligātais parametrs <code>type</code> norāda tipu tam binārajam formātam, ko atgriezīs izvēlēta funkcija.  Var norādīt tipu <code>type any</code>, <code>type list</code> vai <code>type binary</code>.  Ja parametrs <code>type</code> nav norādīts, tad tiek izmantots tips <code>type any</code>.   Ja tiek izmantots tips <code>type list</code> vai <code>type binary</code>, tad sistēma var atgriezt straumes <code>binary</code> vai <code>list</code> vērtību, nevis buferī ievietotu vērtību, un tas var samazināt formāta nolasīšanai nepieciešamo atmiņas daudzumu.


## Examples

### Example #1 
Nolasīt baitu sarakstu, kur elementu skaitu nosaka pirmais baits.
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
Nolasīt baitu sarakstu, kur elementu skaitu nosaka pirmais baits, un saglabāt pirmo nolasīto baitu.
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
Nolasīt baitu sarakstu, kur elementu skaitu nosaka pirmais baits, izmantojot straumes sarakstu.
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
