---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Devuelve el resultado de redondear los números positivos hacia abajo y los números negativos hacia arriba. Se puede especificar el número de dígitos.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Devuelve el resultado de redondear <code>number</code> según el signo del número. Esta función redondeará los números positivos hacia abajo y los números negativos hacia arriba.    Si se especifica <code>digits</code>, <code>number</code> se redondea al número <code>digits</code> de dígitos decimales.  


## Examples

### Example #1 
Redondear el número -1,2 hacia cero.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Redondear el número 1,2 hacia cero.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Redondee el número -1.234 a dos posiciones decimales hacia cero.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
