---
title: Number.Log
---

# Number.Log


## Description

Returnează logaritmul numărului în baza specificată (valoare e implicită).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Returnează logaritmul unui număr, <code>number</code>, în baza <code>base</code> specificată. Dacă nu se specifică <code>base</code>, valoarea implicită este Number.E.    Dacă <code>number</code> este nul, <code>Number.Log</code> returnează nul.


## Examples

### Example #1 
Aflați logaritmul în baza 10 pentru 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Aflați logaritmul în baza e pentru 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
