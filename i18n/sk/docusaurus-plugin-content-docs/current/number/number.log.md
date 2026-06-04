---
title: Number.Log
---

# Number.Log


Vráti logaritmus čísla pri zadanom základe (predvolene číslo e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Vráti logaritmus čísla `number` pri zadanom základe `base`. Ak základ `base` nie je zadaný, použije sa predvolená hodnota Number.E. Ak hodnota `number` je null, funkcia `Number.Log` vráti hodnotu null.


## Examples

### Example #1
Získajte dekadický logaritmus (so základom 10) čísla 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Získajte prirodzený logaritmus (so základom e) čísla 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
