---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Retourneert de vierkantswortel van het getal.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Hiermee wordt de vierkantswortel van <code>number</code> geretourneerd. Als <code>number</code> null is, retourneert <code>Number.Sqrt</code> null. Als het een negatieve waarde is, wordt <code>Number.NaN</code> geretourneerd (geen getal).


## Examples

### Example #1 
De vierkantswortel van 625 zoeken.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
De vierkantswortel van 85 zoeken.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
