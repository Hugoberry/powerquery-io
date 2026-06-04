---
title: Number.Exp
---

# Number.Exp


Підносить e до заданого степеню.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Remarks

Повертає результат піднесення e до `number` степеня (експоненційна функція).

-   `number`: значення `number`, для якого обчислюється експоненційна функція. Якщо `number` має Null-значення, функція `Number.Exp` повертає Null-значення.


## Examples

### Example #1
Піднести e до 3 степеню.
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
