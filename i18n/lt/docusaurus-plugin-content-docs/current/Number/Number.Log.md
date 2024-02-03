---
title: Number.Log
---

# Number.Log


## Description

Pateikiamas skaičiaus logaritmas nurodytam pagrindui (numatytasis e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Pateikiamas skaičiaus <code>number</code> logaritmas nurodytu pagrindu <code>base</code>. Jei <code>base</code> yra nenurodyta, numatytoji reikšmė yra Number.E.    Jei <code>number</code> yra neapibrėžta, <code>Number.Log</code> pateikia neapibrėžtą reikšmę.


## Examples

### Example #1 
Gaukite skaičiaus 2 dešimtainį logaritmą.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Gaukite skaičiaus 2 logaritmą, kurio pagrindas e.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
