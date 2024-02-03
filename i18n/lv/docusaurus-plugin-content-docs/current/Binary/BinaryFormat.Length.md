---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Atgriež bināro formātu, kas ierobežo nolasāmo datu apjomu.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Atgriež bināro formātu, kas ierobežo nolasāmo datu apjomu. Gan <code>BinaryFormat.List</code>, gan <code>BinaryFormat.Binary</code> var izmantot lasīšanai līdz datu beigām. <code>BinaryFormat.Length</code> var izmantot, lai ierobežotu nolasāmo baitu skaitu. Parametrs <code>binaryFormat</code> norāda ierobežojamo bināro formātu. Parametrs <code>length</code> norāda nolasāmo baitu skaitu. Parametrs <code>length</code> var būt skaitliska vērtība vai bināra formāta vērtība, kas norāda formātu garuma vērtībai, kura tiek rādīta pirms vērtības nolasīšanas.


## Examples

### Example #1 
Lasot baitu sarakstus, ierobežot nolasīto baitu skaitu uz 2.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Lasot baitu sarakstus, ierobežot nolasāmo baitu skaitu uz baitu vērtību, kas norādīta saraksta priekšā.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
