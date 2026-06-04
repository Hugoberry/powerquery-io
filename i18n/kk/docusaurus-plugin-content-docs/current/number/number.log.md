---
title: Number.Log
---

# Number.Log


Көрсетілген негіз (әдепкі бойынша, "e") бойынша сан логарифмін қайтарады.


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Көрсетілген `base` негізі үшін `number` санының логарифмін қайтарады. Егер `base` көрсетілмесе, әдепкі мәні Number.E болады. Егер `number` null болса, `Number.Log` null мәнін қайтарады.


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
