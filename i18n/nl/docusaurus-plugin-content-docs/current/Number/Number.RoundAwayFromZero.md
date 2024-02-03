---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Retourneert het resultaat van het naar boven afronden van positieve getallen en het naar beneden afronden van negatieve getallen. Het aantal cijfers kan worden opgegeven.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Retourneert het resultaat van het afronden van <code>number</code> op basis van het teken bij het getal. Deze functie rondt positieve getallen naar boven en negatieve getallen naar beneden af.    Als <code>digits</code> is opgegeven, wordt <code>number</code> afgerond naar het <code>digits</code> aantal decimale cijfers.  


## Examples

### Example #1 
Het getal -1,2 afronden, weg van nul.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Het getal 1,2 afronden, weg van nul.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Het getal -1,234 afronden naar twee decimalen vanaf nul.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
