---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Indica si el valor es NaN (no un número).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Indica si el valor es NaN (no un número). Devuelve <code>true</code> si <code>number</code> es equivalente a <code>Number.IsNaN</code>, <code>false</code> en caso contrario.


## Examples

### Example #1 
Comprobar si 0 dividido por 0 es NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Comprobar si 1 dividido por 0 es NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
