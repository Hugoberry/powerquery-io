---
title: Number.Power
---

# Number.Power


Pakelia skaičių nurodytu laipsniu.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Pateikiamas `number` pakėlimo `power` laipsniu rezultatas. Jei `number` arba `power` neapibrėžta, `Number.Power` pateikia neapibrėžtą reikšmę.

-   `number`: pagrindas.
-   `power`: laipsnio rodiklis.


## Examples

### Example #1
Raskite skaičiaus 5, pakelto 3 laipsniu, (5 kubu) reikšmę.
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
