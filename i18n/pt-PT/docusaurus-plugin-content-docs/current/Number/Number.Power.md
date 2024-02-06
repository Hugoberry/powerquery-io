---
title: Number.Power
---

# Number.Power


Eleva um número à potência especificada.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Devolve o resultado de elevar <code>number</code> à potência de <code>power</code>.    Se <code>number</code> ou <code>power</code> forem nulos, <code>Number.Power</code> devolve um valor nulo.      <ul>        <li><code>number</code>: a base.</li>        <li><code>power</code>: o expoente.</li>      </ul>


## Examples

### Example #1 
Determinar o valor de 5 elevado à potência de 3 (5 ao cubo).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
