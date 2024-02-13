---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Retourneert het resultaat van het naar beneden afronden van positieve getallen en het naar boven afronden van negatieve getallen. Het aantal cijfers kan worden opgegeven.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Retourneert het resultaat van het afronden van <code>number</code> op basis van het teken bij het getal. Deze functie rondt positieve getallen naar beneden en negatieve getallen naar boven af.    Als <code>digits</code> is opgegeven, wordt <code>number</code> afgerond naar het <code>digits</code> aantal decimale cijfers.  


## Examples

### Example #1 
Het getal -1,2 afronden op nul.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Het getal 1,2 afronden op nul.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Het getal -1.234 afronden naar twee decimalen richting nul.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
