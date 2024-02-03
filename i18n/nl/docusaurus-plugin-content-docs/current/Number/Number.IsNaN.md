---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Geeft aan of de waarde NaN (Not a number, geen getal) is.


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Geeft aan of de waarde NaN (Not a number, geen getal) is. Retourneert <code>true</code> als <code>number</code> gelijk is aan <code>Number.IsNaN</code> en <code>false</code> als dat niet het geval is.


## Examples

### Example #1 
Controleren of 0 gedeeld door 0 NaN is.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Controleren of 1 gedeeld door 0 NaN is.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
