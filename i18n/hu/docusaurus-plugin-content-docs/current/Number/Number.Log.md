---
title: Number.Log
---

# Number.Log


## Description

A szám megadott alapú logaritmusát adja vissza (az alapértelmezés az e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

A(z) <code>number</code> szám megadott <code>base</code> alapú logaritmusát adja vissza. Ha a(z) <code>base</code> nincs megadva, az alapértelmezett érték Number.E.     Ha a(z) <code>number</code> érték null, a <code>Number.Log</code> függvény null értéket ad vissza.


## Examples

### Example #1 
A 2-es szám 10-es alapú logaritmusának lekérése.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
A 2-es szám „e” alapú logaritmusának lekérése.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
