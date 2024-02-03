---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Pateikiamas dvejetainis formatas, kuris perskaito elementų seką ir pateikia sąrašą.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Pateikiamas dvejetainis formatas, kuris perskaito elementų seką ir pateikia <code>sąrašą</code>. <code>binaryFormat</code> parametras nurodo kiekvieno elemento dvejetainį formatą.  Yra trys būdai nustatyti skaitomų elementų skaičių: <ul><li>jei <code>countOrCondition</code> nenurodyta, tada dvejetainis formatas bus skaitomas tol, kol nebebus elementų.</li><li>Jei <code>countOrCondition</code> yra skaičius, tada dvejetainis formatas perskaitys daug elementų.</li><li>Jei <code>countOrCondition</code> yra funkcija, tada ta funkcija bus iškviesta dėl kiekvieno skaitomo elemento.  Funkcija pateikia Teisinga norint tęsti ir – Klaidinga norint sustabdyti elementų skaitymą.  Galutinis elementas įtraukiamas į sąrašą.</li><li>Jei <code>countOrCondition</code> yra dvejetainis formatas, tada prieš sąrašą tikimasi tam tikro elementų skaičiaus, o nurodytas formatas naudojamas skaičiui perskaityti.</li></ul>


## Examples

### Example #1 
Skaityti baitus iki duomenų pabaigos.
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
Perskaityti du baitus.
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
Skaityti baitus, kol baito reikšmė bus didesnė nei du arba lygi.
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
