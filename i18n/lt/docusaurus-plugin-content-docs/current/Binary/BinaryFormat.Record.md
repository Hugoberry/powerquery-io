---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

Pateikiamas dvejetainis formatas, kuris perskaito įrašą.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

Pateikiamas dvejetainis formatas, kuris perskaito įrašą.  <code>record</code> parametras nurodo įrašo formatą.  Kiekviename įrašo lauke gali būti skirtingas dvejetainis formatas.  Jei lauke yra reikšmė, kuri nėra dvejetainio formato reikšmė, tada neperskaitomi jokie to lauko duomenys, o lauko reikšmė atkartojama rezultate.


## Examples

### Example #1 
Perskaityti įrašą su vienu 16 bitų sveikuoju skaičiumi ir vienu 32 bitų sveikuoju skaičiumi.
```powerquery
let
    binaryData = #binary({
        0x00, 0x01,
        0x00, 0x00, 0x00, 0x02
    }),
    recordFormat = BinaryFormat.Record([
        A = BinaryFormat.UnsignedInteger16,
        B = BinaryFormat.UnsignedInteger32
    ])
in
    recordFormat(binaryData)
```

Result: 
```powerquery
[A = 1, B = 2]
```




## Category
Binary Formats.Reading records
