---
title: Number.Power
---

# Number.Power


Eleva un número a la potencia especificada.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Devuelve el resultado de elevar <code>number</code> a la potencia de <code>power</code>.    Si <code>number</code> o <code>power</code> son "null", <code>Number.Power</code> devuelve "null".      <ul>        <li><code>number</code>: la base.</li>        <li><code>power</code>: el exponente.</li>      </ul>


## Examples

### Example #1 
Hallar el valor de 5 elevado a la potencia de 3 (5 al cubo).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
