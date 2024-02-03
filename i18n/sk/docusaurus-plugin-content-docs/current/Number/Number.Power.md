---
title: Number.Power
---

# Number.Power


## Description

Umocní číslo na danú mocninu.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Vráti výsledok umocnenia čísla <code>number</code> na mocninu <code>power</code>.    Ak hodnota <code>number</code> alebo <code>power</code> je null, funkcia <code>Number.Power</code> vráti hodnotu null.      <ul>        <li><code>number</code>: Základ.</li>        <li><code>power</code>: Exponent.</li>      </ul>


## Examples

### Example #1 
Nájdite hodnotu čísla 5 umocneného na 3. mocninu.
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
