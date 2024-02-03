---
title: Number.Log
---

# Number.Log


## Description

Restituisce il logaritmo del numero alla base specificata (predefinito e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Restituisce il logaritmo di un numero, <code>number</code>, alla base <code>base</code> specificata. Se <code>base</code> non è specificato, il valore predefinito è Number.E.    Se <code>number</code> è Null, <code>Number.Log</code> restituisce Null.


## Examples

### Example #1 
Ottenere il logaritmo in base 10 di 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Ottenere il logaritmo in base e di 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
