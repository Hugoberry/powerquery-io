---
title: Number.RoundUp
---

# Number.RoundUp


Retourneert het volgende, hoogste gehele getal. Het aantal cijfers kan worden opgegeven.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Retourneert het resultaat van naar boven afronden van `number` op het volgende hoogste gehele getal. Als `number` nul is, retourneert deze functie null. Als `digits` is opgegeven, wordt `number` afgerond op het opgegeven aantal decimale cijfers.


## Examples

### Example #1
Het getal 1,234 naar boven afronden op een geheel getal.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2
Het getal 1,999 naar boven afronden op een geheel getal.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3
1,234 afronden naar twee decimalen.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
