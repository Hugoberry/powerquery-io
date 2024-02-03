---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Returnează cel mai mare număr întreg anterior. Se poate specifica numărul de cifre.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Returnează rezultatul rotunjirii <code>number</code> prin lipsă la cel mai mare număr întreg anterior. Dacă <code>number</code> este nul, această funcție returnează nul.    Dacă se furnizează <code>digits</code>, <code>number</code> este rotunjit la numărul specificat de cifre zecimale.  


## Examples

### Example #1 
Rotunjiţi prin lipsă 1,234 la numărul întreg.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Rotunjiţi prin lipsă 1,999 la numărul întreg.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Rotunjiți prin lipsă 1,999 la două zecimale.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
