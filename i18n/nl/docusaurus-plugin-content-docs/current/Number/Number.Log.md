---
title: Number.Log
---

# Number.Log


## Description

Retourneert de logaritme van het getal met het opgegeven grondtal (standaard is dat e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Hiermee wordt de logaritme van een getal, <code>number</code>, geretourneerd met het opgegeven grondtal <code>base</code>. Als <code>base</code> niet is opgegeven, is Number.E de standaardwaarde. Als <code>number</code> null is, retourneert <code>Number.Log</code> null.


## Examples

### Example #1 
De logaritme met grondtal 10 van 2 ophalen.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
De logaritme met grondtal e van 2 ophalen.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
