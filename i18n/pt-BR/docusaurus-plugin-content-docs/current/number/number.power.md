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

Retorna o resultado de elevar <code>number</code> à <code>power</code>ª potência.    Se <code>number</code> ou <code>power</code> forem nulos, <code>Number.Power</code> retornará nulo.      <ul>        <li><code>number</code>: a base.</li>        <li><code>power</code>: o expoente.</li>      </ul>


## Examples

### Example #1 
Localize o valor 5 elevado à potência 3 (5 cúbico).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
