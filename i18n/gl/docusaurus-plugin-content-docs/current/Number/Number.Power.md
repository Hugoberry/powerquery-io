---
title: Number.Power
---

# Number.Power


## Description

Eleva un número á potencia indicada.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Devolve o resultado de elevar <code>number</code> á potencia de <code>power</code>.    Se <code>number</code> ou <code>power</code> son nulos, <code>Number.Power</code> devolve nulo.      <ul>        <li><code>number</code>: a base.</li>        <li><code>power</code>: o expoñente.</li>      </ul>


## Examples

### Example #1 
Buscar o valor de 5 elevado á potencia de 3 (5 ao cubo).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
