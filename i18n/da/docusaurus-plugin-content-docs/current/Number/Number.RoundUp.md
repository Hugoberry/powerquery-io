---
title: Number.RoundUp
---

# Number.RoundUp


Returnerer det næste højeste tal. Antallet af cifre kan angives.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Returnerer resultatet af at runde <code>number</code> op til det næste højeste heltal. Hvis <code>number</code> er null, returnerer denne funktion null.    Hvis der angives <code>digits</code>, afrundes <code>number</code> til det angivne antal decimaltal.  


## Examples

### Example #1 
Rund 1,234 op til et heltal.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Rund 1,999 op til et heltal.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Rund 1,234 op til to decimaler.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
