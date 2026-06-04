---
title: Number.Log
---

# Number.Log


Devolve o logaritmo do número na base especificada (o valor predefinido é e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Devolve o logaritmo dun número, `number`, na base `base` especificada. Se non se especifica `base`, o valor predefinido é Number.E. Se `number` é nulo, `Number.Log` devolve nulo.


## Examples

### Example #1
Obtén o logaritmo en base 10 de 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Obtén o logaritmo en base e de 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
