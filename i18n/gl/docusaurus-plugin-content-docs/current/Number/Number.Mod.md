---
title: Number.Mod
---

# Number.Mod


## Description

Divide de maneira enteira dous números e devolve o resto.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Devolve o resto resultante da división enteira de <code>number</code> entre <code>divisor</code>.    Se <code>number</code> ou <code>divisor</code> son nulos, <code>Number.Mod</code> devolve nulo.      <ul>        <li><code>number</code>: o dividendo.</li>        <li><code>divisor</code>: o divisor.</li>      </ul>


## Examples

### Example #1 
Buscar o resto cando divide 5 entre 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
