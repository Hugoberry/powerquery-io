---
title: Number.Log
---

# Number.Log


Retourneert de logaritme van het getal met het opgegeven grondtal (standaard is dat e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Hiermee wordt de logaritme van een getal, `number`, geretourneerd met het opgegeven grondtal `base`. Als `base` niet is opgegeven, is Number.E de standaardwaarde. Als `number` null is, retourneert `Number.Log` null.


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
