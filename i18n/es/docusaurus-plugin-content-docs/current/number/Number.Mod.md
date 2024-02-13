---
title: Number.Mod
---

# Number.Mod


El entero divide dos números y devuelve el resto.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Devuelve el resto resultante de la división entera de <code>number</code> entre <code>divisor</code>.    Si <code>number</code> o <code>divisor</code> son "null", <code>Number.Mod</code> devuelve "null".      <ul>        <li><code>number</code>: el dividendo.</li>        <li><code>divisor</code>: el divisor.</li>      </ul>


## Examples

### Example #1 
Buscar el resto cuando se divide 5 entre 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
