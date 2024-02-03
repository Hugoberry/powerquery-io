---
title: Number.Power
---

# Number.Power


## Description

Eleva un numero alla potenza specificata.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Restituisce il risultato dell'elevazione di <code>number</code> alla potenza di <code>power</code>.    Se <code>number</code> o <code>power</code> è Null, <code>Number.Power</code> restituisce Null.      <ul>        <li><code>number</code>: base.</li>        <li><code>power</code>: esponente.</li>      </ul>


## Examples

### Example #1 
Trovare il valore di 5 elevato alla potenza di 3 (5 al cubo).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
