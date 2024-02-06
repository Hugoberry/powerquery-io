---
title: Number.Log
---

# Number.Log


Retourne le logarithme du nombre selon la base que vous spécifiez (par défaut, e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Retourne le logarithme d'un nombre, <code>number</code>, selon la base <code>base</code> spécifiée. Si <code>base</code> n'est pas spécifié, la valeur par défaut est Number.E.    Si <code>number</code> a la valeur Null, <code>Number.Log</code> retourne Null.


## Examples

### Example #1 
Obtient le logarithme de base 10 de 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Obtient le logarithme de base e de 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
