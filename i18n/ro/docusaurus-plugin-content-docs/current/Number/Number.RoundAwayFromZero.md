---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Returnează rezultatul rotunjirii numerelor pozitive prin adaos și a numerelor negative prin lipsă. Se poate specifica numărul de cifre.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Returnează rezultatul rotunjirii <code>number</code> în funcție de semnul numărului. Această funcție va rotunji numere pozitive prin adaos și numere negative prin lipsă.    Dacă se specifică <code>digits</code>, <code>number</code> este rotunjit la numărul <code>digits</code> de cifre zecimale.  


## Examples

### Example #1 
Rotunjiţi numărul -1,2 de la zero.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Rotunjiţi numărul 1,2 de la zero.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Rotunjiți numărul -1,234 la două zecimale de la zero.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
