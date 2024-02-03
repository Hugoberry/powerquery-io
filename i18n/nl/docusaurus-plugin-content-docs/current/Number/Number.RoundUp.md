---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Retourneert het volgende, hoogste gehele getal. Het aantal cijfers kan worden opgegeven.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Retourneert het resultaat van naar boven afronden van <code>number</code> op het volgende hoogste gehele getal. Als <code>number</code> nul is, retourneert deze functie null. Als <code>digits</code> is opgegeven, wordt <code>number</code> afgerond op het opgegeven aantal decimale cijfers.  


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
