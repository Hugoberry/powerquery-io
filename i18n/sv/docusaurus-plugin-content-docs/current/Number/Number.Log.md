---
title: Number.Log
---

# Number.Log


## Description

Returnerar logaritmen för talet till angiven bas (standard är e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Returnerar logaritmen för ett tal, <code>number</code>, med den angivna <code>base</code>-basen. Om <code>base</code> inte anges är standardvärdet Number.E.    Om <code>number</code> är null returnerar <code>Number.Log</code> null.


## Examples

### Example #1 
Hämta 10-logaritmen av 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Hämta e-logaritmen av 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
