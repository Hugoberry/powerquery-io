---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Returnează rezultatul rotunjirii numerelor pozitive prin lipsă și a numerelor negative prin adaos. Se poate specifica numărul de cifre.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Returnează rezultatul rotunjirii <code>number</code> în funcție de semnul numărului. Această funcție va rotunji numere pozitive prin lipsă și numere negative prin adaos.    Dacă se specifică <code>digits</code>, <code>number</code> este rotunjit la numărul <code>digits</code> de cifre zecimale.  


## Examples

### Example #1 
Rotunjiţi numărul -1,2 spre zero.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Rotunjiţi numărul 1,2 spre zero.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Rotunjiți numărul -1,234 la două zecimale spre zero.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
