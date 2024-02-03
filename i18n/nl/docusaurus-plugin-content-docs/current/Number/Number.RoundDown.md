---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Retourneert het vorige, hoogste gehele getal. Het aantal cijfers kan worden opgegeven.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Retourneert het resultaat van naar beneden afronden van <code>number</code> op het vorige hoogste gehele getal. Als <code>number</code> nul is, retourneert deze functie null. Als <code>digits</code> is opgegeven, wordt <code>number</code> afgerond op het opgegeven aantal decimale cijfers.  


## Examples

### Example #1 
Het getal 1,234 afronden op een geheel getal.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Het getal 1,999 afronden op een geheel getal.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
1,999 afronden naar twee decimalen.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
