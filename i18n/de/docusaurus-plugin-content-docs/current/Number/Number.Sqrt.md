---
title: Number.Sqrt
---

# Number.Sqrt


Gibt die Quadratwurzel der Zahl zurück.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Gibt die Quadratwurzel von <code>number</code> zurück.    Ist <code>number</code> NULL, gibt <code>Number.Sqrt</code> NULL zurück. Handelt es sich um einen negativen Wert, wird <code>Number.NaN</code> (kein numerischer Wert) zurückgegeben.


## Examples

### Example #1 
Ermittelt die Quadratwurzel von 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Ermittelt die Quadratwurzel von 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
