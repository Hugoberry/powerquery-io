---
title: Number.Log
---

# Number.Log


Gibt den Logarithmus der Zahl zur angegebenen Basis (standardmäßig "e") zurück.


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Gibt den Logarithmus einer Zahl (`number`) zur angegebenen Basis (`base`) zurück. Ohne Angabe von "`base`" wird standardmäßig "Number.E" verwendet. Ist `number` NULL, gibt `Number.Log` NULL zurück.


## Examples

### Example #1
Ermittelt den Logarithmus von 2 zur Basis 10.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Ermittelt den Logarithmus von 2 zur Basis "e".
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
