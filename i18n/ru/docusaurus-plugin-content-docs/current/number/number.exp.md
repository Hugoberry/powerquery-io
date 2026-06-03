---
title: Number.Exp
---

# Number.Exp


Возводит e в заданную степень.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Remarks

Возвращает результат возведения e в степень `number` (экспонента).

-   `number`: значение `number`, для которого вычисляется экспонента. Если `number` имеет значение NULL, `Number.Exp` возвращает NULL.


## Examples

### Example #1
Возвести e в степень 3.
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
