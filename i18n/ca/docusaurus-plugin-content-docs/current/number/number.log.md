---
title: Number.Log
---

# Number.Log


Retorna el logaritme del nombre a la base especificada (e per defecte).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Retorna el logaritme d'un nombre, `number`, amb la base `base` especificada. Si no s'especifica `base`, el valor per defecte és Number.E. Si `number` és nul, `Number.Log` retorna el valor nul.


## Examples

### Example #1
Obté el logaritme de base 10 de 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Obté el logaritme de base e de 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
