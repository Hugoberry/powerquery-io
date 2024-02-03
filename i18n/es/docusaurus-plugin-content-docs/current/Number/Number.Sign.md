---
title: Number.Sign
---

# Number.Sign


## Description

Devuelve 1 si el número es positivo, -1 si es negativo y 0 si es cero.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

Devuelve 1 si <code>number</code> es un número positivo, -1 si es negativo y 0 si es cero.    Si <code>number</code> es "null", <code>Number.Sign</code> devuelve "null".


## Examples

### Example #1 
Determinar el signo de 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Determinar el signo de -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Determinar el signo de 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
