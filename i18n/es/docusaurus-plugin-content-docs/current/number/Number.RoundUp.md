---
title: Number.RoundUp
---

# Number.RoundUp


Devuelve el número más alto siguiente. Se puede especificar el número de dígitos.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Devuelve el resultado de redondear <code>number</code> hacia arriba hasta el entero más alto siguiente. Si <code>number</code> es NULL, esta función devuelve NULL.    Si se proporciona <code>digits</code>, <code>number</code> se redondea al número especificado de dígitos decimales.  


## Examples

### Example #1 
Redondear hacia arriba 1,234 a un entero.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Redondear hacia arriba 1,999 a un entero.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Redondee 1,234 hacia arriba hasta dos posiciones decimales.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
