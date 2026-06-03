---
title: Number.Log
---

# Number.Log


Retorna o logaritmo do número à base especificada (padrão e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Retorna o logaritmo de um número, `number`, à base `base` especificada. Se `base` não for especificada, o valor padrão será Number.E. Se `number` for nulo, `Number.Log` retornará um valor nulo.


## Examples

### Example #1
Obtém o logaritmo de base 10 de 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Obtém o logaritmo de base e de 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
