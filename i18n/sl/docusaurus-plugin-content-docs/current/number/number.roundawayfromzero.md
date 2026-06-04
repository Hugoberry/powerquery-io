---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


Vrne rezultat zaokroževanja navzgor za pozitivna števila in navzdol za negativna števila. Določite lahko število števk.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Vrne rezultat zaokroževanja `number` glede na predznak števila. Ta funkcija zaokroži pozitivna števila navzgor in negativna števila navzdol. Če navedete `digits`, je `number` zaokrožen na število `digits` decimalnih mest.


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
