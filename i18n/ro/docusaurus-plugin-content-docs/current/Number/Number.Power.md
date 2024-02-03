---
title: Number.Power
---

# Number.Power


## Description

Ridică un număr la puterea dată.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Returnează rezultatul ridicării <code>number</code> la puterea <code>power</code>.     Dacă <code>number</code> sau <code>power</code> este nul, <code>Number.Power</code> returnează nul.      <ul>        <li><code>number</code>: baza.</li>        <li><code>power</code>: exponentul.</li>      </ul>


## Examples

### Example #1 
Găsiţi valoarea 5 ridicată la puterea 3 (5 la cub).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
