---
title: Number.Mod
---

# Number.Mod


## Description

L&#39;enter divideix dos nombres i retorna la resta.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Retorna la resta resultant de la divisió d'enters de <code>number</code> per <code>divisor</code>.    Si <code>number</code> o <code>divisor</code> són nuls, <code>Number.Mod</code> retorna el valor nul.      <ul>        <li><code>number</code>: dividend.</li>        <li><code>divisor</code>: divisor.</li>      </ul>


## Examples

### Example #1 
Cerca la resta quan dividiu 5 per 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
