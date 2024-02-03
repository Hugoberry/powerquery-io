---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Возвращает наибольшее предыдущее число. Можно указать число цифр.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Возвращает результат округления <code>number</code> в меньшую сторону к предыдущему наибольшему целому числу. Если <code>number</code> имеет значение NULL, эта функция возвращает NULL.    Если задано <code>digits</code>, <code>number</code> округляется до указанного количества десятичных цифр.  


## Examples

### Example #1 
Округлить 1,234 в меньшую сторону до целого числа.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Округлить 1,999 в меньшую сторону до целого числа.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Округлить 1,999 до двух знаков.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
