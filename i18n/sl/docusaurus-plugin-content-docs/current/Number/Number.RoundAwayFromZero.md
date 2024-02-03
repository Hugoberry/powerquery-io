---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Vrne rezultat zaokroževanja navzgor za pozitivna števila in navzdol za negativna števila. Določite lahko število števk.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Vrne rezultat zaokroževanja <code>number</code> glede na predznak števila. Ta funkcija zaokroži pozitivna števila navzgor in negativna števila navzdol.    Če navedete <code>digits</code>, je <code>number</code> zaokrožen na število <code>digits</code> decimalnih mest.  


## Examples

### Example #1 
Zaokrožite število –1,2 stran od nič.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Zaokrožite število 1,2 stran od nič.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Zaokroži število -1,234 na dve decimalni mesti stran od nič.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
