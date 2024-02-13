---
title: Number.Sqrt
---

# Number.Sqrt


Devuelve la raíz cuadrada del número.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Devuelve la raíz cuadrada de <code>number</code>.    Si <code>number</code> es "null", <code>Number.Sqrt</code> devuelve "null". Si es un valor negativo, se devuelve <code>Number.NaN</code> (no es un número).


## Examples

### Example #1 
Hallar la raíz cuadrada de 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Hallar la raíz cuadrada de 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
