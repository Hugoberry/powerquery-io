---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Returnează cel mai mare număr următor. Se poate specifica numărul de cifre.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Returnează rezultatul rotunjirii <code>number</code> prin adaos la următorul cel mai mare număr întreg. Dacă <code>number</code> este nul, această funcție returnează null.    Dacă se furnizează <code>digits</code>, <code>number</code> este rotunjit la numărul specificat de cifre zecimale.  


## Examples

### Example #1 
Rotunjiţi prin adaos 1,234 la numărul întreg.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Rotunjiţi prin adaos 1,999 la numărul întreg.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Rotunjiți prin adaos 1,2345 la două zecimale.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
