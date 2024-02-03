---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Pateikiamas dvejetainis formatas, kuris apriboja perskaitomų duomenų kiekį.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Pateikiamas dvejetainis formatas, kuris apriboja perskaitomų duomenų kiekį.  <code>BinaryFormat.List</code> ir <code>BinaryFormat.Binary</code> galima naudoti norint perskaityti iki duomenų pabaigos.  <code>BinaryFormat.Length</code> galima naudoti norint apriboti perskaitomų baitų skaičių.  <code>binaryFormat</code> parametras nurodo dvejetainį ribotiną formatą.  <code>length</code> parametras nurodo perskaitomų baitų skaičių.  <code>length</code> parametras gali būti skaitinė reikšmė arba dvejetainio formato reikšmė, kuri nurodo ilgio reikšmės, pasirodančios prieš skaitomą reikšmę, formatą.


## Examples

### Example #1 
Kai skaitomas baitų sąrašas, apriboti perskaitomų baitų skaičių iki 2.
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
Kai skaitomas baitų sąrašas, apriboti skaitomų baitų skaičių iki baito reikšmės, esančios prieš sąrašą.
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
