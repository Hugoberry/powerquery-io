---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


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


## Remarks

Atgriež bināru formātu, kas izvēlas nākamo bināro formātu, ņemot vērā jau nolasītu vērtību. Ar šo funkciju izveidotā binārā formāta vērtība darbojas pakāpeniski:

-   Vērtības nolasīšanai tiek izmantots ar parametru `binaryFormat` norādītais binārais formāts.
-   Šī vērtība tiek nodota izvēlētajai funkcijai, ko norādīja parametrs `chooseFunction`.
-   Izvēlētā funkcija pārbauda vērtību un atgriež otru bināro formātu.
-   Otrs binārais formāts tiek izmantots otras vērtības nolasīšanai.
-   Ja ir norādīta kombinēšanas funkcija, tad pirmā un otrā vērtība tiek nodota kombinēšanas funkcijai un tiek atgriezta rezultāta vērtība.
-   Ja kombinēšanas funkcija nav norādīta, tiek atgriezta otrā vērtība.
-   Tiek atgriezta otrā vērtība.

Neobligātais parametrs `type` norāda tipu tam binārajam formātam, ko atgriezīs izvēlēta funkcija. Var norādīt tipu `type any`, `type list` vai `type binary`. Ja parametrs `type` nav norādīts, tad tiek izmantots tips `type any`. Ja tiek izmantots tips `type list` vai `type binary`, tad sistēma var atgriezt straumes `binary` vai `list` vērtību, nevis buferī ievietotu vērtību, un tas var samazināt formāta nolasīšanai nepieciešamo atmiņas daudzumu.


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
