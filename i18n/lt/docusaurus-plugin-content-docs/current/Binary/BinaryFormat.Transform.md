---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Pateikiamas dvejetainis formatas, kuris transformuos reikšmes, skaitomas kito dvejetainio formato.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Pateikiamas dvejetainis formatas, kuris transformuos reikšmes, skaitomas kito dvejetainio formato.  <code>binaryFormat</code> parametras nurodo dvejetainį formatą, kuris bus naudojamas reikšmei perskaityti.  <code>function</code> iškviečiama su perskaityta reikšme ir pateikiama transformuota reikšmė.


## Examples

### Example #1 
Perskaityti baitą ir vieną įtraukti.
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
