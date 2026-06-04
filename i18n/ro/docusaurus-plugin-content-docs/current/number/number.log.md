---
title: Number.Log
---

# Number.Log


Returnează logaritmul numărului în baza specificată (valoare e implicită).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Returnează logaritmul unui număr, `number`, în baza `base` specificată. Dacă nu se specifică `base`, valoarea implicită este Number.E. Dacă `number` este nul, `Number.Log` returnează nul.


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
