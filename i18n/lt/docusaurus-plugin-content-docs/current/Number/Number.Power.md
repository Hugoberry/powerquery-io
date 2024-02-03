---
title: Number.Power
---

# Number.Power


## Description

Pakelia skaičių nurodytu laipsniu.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Pateikiamas <code>number</code> pakėlimo <code>power</code> laipsniu rezultatas.    Jei <code>number</code> arba <code>power</code> neapibrėžta, <code>Number.Power</code> pateikia neapibrėžtą reikšmę.      <ul>        <li><code>number</code>: pagrindas.</li>        <li><code>power</code>: laipsnio rodiklis.</li>      </ul>


## Examples

### Example #1 
Raskite skaičiaus 5, pakelto 3 laipsniu, (5 kubu) reikšmę.
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
