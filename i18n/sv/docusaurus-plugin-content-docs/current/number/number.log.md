---
title: Number.Log
---

# Number.Log


Returnerar logaritmen för talet till angiven bas (standard är e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Returnerar logaritmen för ett tal, `number`, med den angivna `base`\-basen. Om `base` inte anges är standardvärdet Number.E. Om `number` är null returnerar `Number.Log` null.


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
