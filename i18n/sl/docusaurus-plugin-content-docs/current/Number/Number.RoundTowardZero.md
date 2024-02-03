---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Vrne rezultat zaokroževanja navzdol za pozitivna števila in navzgor za negativna števila. Določite lahko število števk.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Vrne rezultat zaokroževanja <code>number</code> glede na predznak števila. Ta funkcija zaokroži pozitivna števila navzdol in negativna števila navzgor.    Če navedete <code>digits</code>, je <code>number</code> zaokrožen na število <code>digits</code> decimalnih mest.  


## Examples

### Example #1 
Zaokrožite število –1,2 proti nič.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Zaokrožite število 1,2 proti nič.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Zaokrožite število -1,234 na dve decimalni mesti proti nič.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
