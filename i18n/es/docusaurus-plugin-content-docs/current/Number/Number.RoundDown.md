---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Devuelve el número anterior más alto. Se puede especificar el número de dígitos.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Devuelve el resultado de redondear <code>number</code> hacia abajo hasta el entero más alto anterior. Si <code>number</code> es NULL, esta función devuelve NULL.    Si se proporciona <code>digits</code>, <code>number</code> se redondea al número especificado de dígitos decimales.  


## Examples

### Example #1 
Redondear 1,234 a un entero.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Redondear 1,999 a un entero.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Redondee hacia abajo 1,999 a dos posiciones decimales.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
