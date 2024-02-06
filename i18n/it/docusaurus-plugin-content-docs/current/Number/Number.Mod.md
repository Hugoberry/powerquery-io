---
title: Number.Mod
---

# Number.Mod


L&#39;intero divide due numeri e restituisce la parte restante.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Restituisce la parte risultante dalla divisione dell'intero <code>number</code> per <code>divisor</code>.    Se <code>number</code> o <code>divisor</code> è Null, <code>Number.Mod</code> restituisce Null.      <ul>        <li><code>number</code>: dividendo.</li>        <li><code>divisor</code>: divisore.</li>      </ul>


## Examples

### Example #1 
Trovare la parte restante dalla divisione di 5 per 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
