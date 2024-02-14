---
title: Number.Log
---

# Number.Log


Returnerer logaritmen for tallet til det grundtal, du angiver (standard er e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Returnerer logaritmen for et tal, <code>number</code>, til det angivne grundtal <code>base</code>. Hvis <code>base</code> ikke er angivet, er standardværdien Number.E.    Hvis <code>number</code> er null, returnerer <code>Number.Log</code> null.


## Examples

### Example #1 
Hent logaritmen med grundtallet 10 for 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Hent logaritmen med grundtallet e for 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
