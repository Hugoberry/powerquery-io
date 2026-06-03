---
title: Number.Log
---

# Number.Log


Devuelve el logaritmo del número en la base especificada (e, de forma predeterminada).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Devuelve el logaritmo de un número (`number`) en la base especificada `base`. Si no se especifica `base`, el valor predeterminado es Number.E. Si `number` es "null", `Number.Log` devuelve "null".


## Examples

### Example #1
Obtenga el logaritmo en base 10 de 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Obtenga el logaritmo en base e de 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
