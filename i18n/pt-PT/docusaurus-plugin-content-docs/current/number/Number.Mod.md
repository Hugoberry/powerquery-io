---
title: Number.Mod
---

# Number.Mod


Efetua a divisão de dois números inteiros e devolve o resto.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Devolve o resto resultante da divisão de números inteiros de <code>number</code> por <code>divisor</code>.    Se <code>number</code> ou <code>divisor</code> forem nulos, <code>Number.Mod</code> devolve um valor nulo.      <ul>        <li><code>number</code>: o dividendo.</li>        <li><code>divisor</code>: o divisor.</li>      </ul>


## Examples

### Example #1 
Determinar o resto da divisão de 5 por 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
