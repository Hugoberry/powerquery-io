---
title: Number.Log
---

# Number.Log


## Description

Devolve o logaritmo do número na base especificada (o valor predefinido é e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Devolve o logaritmo dun número, <code>number</code>, na base <code>base</code> especificada. Se non se especifica <code>base</code>, o valor predefinido é Number.E.    Se <code>number</code> é nulo, <code>Number.Log</code> devolve nulo.


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
