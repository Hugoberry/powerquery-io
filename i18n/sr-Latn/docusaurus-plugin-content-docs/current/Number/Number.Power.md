---
title: Number.Power
---

# Number.Power


## Description

Podiže broj na dati stepen.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Vraća rezultat podizanja <code>number</code> na stepen <code>power</code>.     Ako su <code>number</code> ili <code>power</code> bez vrednosti, <code>Number.Power</code> vraća rezultat bez vrednosti.      <ul>        <li><code>number</code>: Osnova.</li>        <li><code>power</code>: Eksponent.</li>      </ul>


## Examples

### Example #1 
Pronalaženje vrednosti broja 5 podignutog na treći stepen (5 na kub).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
