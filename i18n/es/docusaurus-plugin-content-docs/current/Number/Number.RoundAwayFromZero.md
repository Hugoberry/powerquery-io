---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Devuelve el resultado de redondear los números positivos hacia arriba y los números negativos hacia abajo. Se puede especificar el número de dígitos.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Devuelve el resultado de redondear <code>number</code> según el signo del número. Esta función redondeará los números positivos hacia arriba y los números negativos hacia abajo.    Si se especifica <code>digits</code>, <code>number</code> se redondea al número <code>digits</code> de dígitos decimales.  


## Examples

### Example #1 
Redondear el número -1,2 en dirección contraria a cero.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Redondear el número 1,2 en dirección contraria a cero.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Redondee el número -1,234 a dos posiciones decimales a partir de cero.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
