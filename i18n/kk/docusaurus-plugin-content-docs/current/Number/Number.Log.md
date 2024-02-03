---
title: Number.Log
---

# Number.Log


## Description

Көрсетілген негіз (әдепкі бойынша, &#34;e&#34;) бойынша сан логарифмін қайтарады.


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Көрсетілген <code>base</code> негізі үшін <code>number</code> санының логарифмін қайтарады. Егер <code>base</code> көрсетілмесе, әдепкі мәні Number.E болады.    Егер <code>number</code> null болса, <code>Number.Log</code> null мәнін қайтарады.


## Examples

### Example #1 
2 санының ондық логарифмін алу.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
2 санының натурал логарифмін алу.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
