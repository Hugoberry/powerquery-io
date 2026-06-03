---
title: Number.Power
---

# Number.Power


Возводит число в заданную степень.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Возвращает результат возведения `number` в степень `power`. Если `number` или `power` равно NULL, `Number.Power` возвращает NULL.

-   `number`: основание.
-   `power`: показатель степени.


## Examples

### Example #1
Найти значение 5 в степени 3 (5 в кубе).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
