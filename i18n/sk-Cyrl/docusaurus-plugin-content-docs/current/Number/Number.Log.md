---
title: Number.Log
---

# Number.Log


## Description

Vráti logaritmus čísla pri zadanom základe (predvolene číslo e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Vráti logaritmus čísla <code>number</code> pri zadanom základe <code>base</code>. Ak základ <code>base</code> nie je zadaný, použije sa predvolená hodnota Number.E.    Ak hodnota <code>number</code> je null, funkcia <code>Number.Log</code> vráti hodnotu null.


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
