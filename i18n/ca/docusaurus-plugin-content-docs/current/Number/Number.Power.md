---
title: Number.Power
---

# Number.Power


## Description

Eleva un nombre a la potència donada.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Retorna el resultat d'elevar <code>number</code> a la potència de <code>power</code>.    Si <code>number</code> o <code>power</code> són nuls, <code>Number.Power</code> retorna el valor nul.      <ul>        <li><code>number</code>: la base.</li>        <li><code>power</code>: l'exponent.</li>      </ul>


## Examples

### Example #1 
Troba el valor de 5 elevat a la potència de 3 (5 elevat al cub).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
