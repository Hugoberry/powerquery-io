---
title: Number.Power
---

# Number.Power


Підносить число до заданого степеню.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Повертає результат піднесення `number` до степеня `power`. Якщо `number` або `power` має Null-значення, функція `Number.Power` повертає Null-значення.

-   `number`: основа.
-   `power`: експонента.


## Examples

### Example #1
Знайти значення 5 піднесено в степені до 3 (5 в кубі).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
