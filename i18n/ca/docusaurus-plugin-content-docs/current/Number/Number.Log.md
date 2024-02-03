---
title: Number.Log
---

# Number.Log


## Description

Retorna el logaritme del nombre a la base especificada (e per defecte).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Retorna el logaritme d'un nombre, <code>number</code>, amb la base <code>base</code> especificada. Si no s'especifica <code>base</code>, el valor per defecte és Number.E.    Si <code>number</code> és nul, <code>Number.Log</code> retorna el valor nul.


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
