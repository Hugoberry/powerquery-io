---
title: Number.Power
---

# Number.Power


## Description

Potencira število na dani eksponent.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Vrne rezultat potenciranja števila <code>number</code> na eksponent <code>power</code>.    Če ima <code>number</code> ali <code>power</code> ničelno vrednost, <code>Number.Power</code> vrne "null".      <ul>        <li><code>number</code>: osnova.</li>        <li><code>power</code>: eksponent.</li>      </ul>


## Examples

### Example #1 
Poiščite vrednost števila 5 na potenco 3 (5 na tretjo).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
