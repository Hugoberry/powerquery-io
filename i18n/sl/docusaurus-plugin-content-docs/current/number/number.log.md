---
title: Number.Log
---

# Number.Log


Vrne logaritem števila z določeno osnovo (privzeto"e").


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Vrne logaritem števila `number` z določeno osnovo `base`. Če osnova `base` ni določena, je privzeta vrednost"Number.E". Če ima `number` ničelno vrednost, `Number.Log` vrne"null".


## Examples

### Example #1
Poiščite logaritem števila 2 z osnovo 10.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Poiščite logaritem števila 2 z osnovo"e".
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
