---
title: Number.Log
---

# Number.Log


Devolve o logaritmo do número para a base especificada (e predefinido).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Devolve o logaritmo de um número, <code>number</code>, para a base <code>base</code> especificada. Se <code>base</code> não for especificado, o valor predefinido é Number.E.    Se <code>number</code> for nulo, <code>Number.Log</code> devolverá um valor nulo.


## Examples

### Example #1 
Obter o logaritmo base 10 de 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Obter o logaritmo base e de 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
