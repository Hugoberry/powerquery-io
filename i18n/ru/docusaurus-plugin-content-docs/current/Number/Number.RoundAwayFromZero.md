---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Возвращает результат округления положительных чисел в большую сторону и отрицательных чисел в меньшую. Можно указать число цифр.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Возвращает результат округления <code>number</code> в зависимости от знака числа. Эта функция будет округлять положительные числа в большую сторону, а отрицательные - в меньшую.    Если задано <code>digits</code>, то <code>number</code> округляется до заданного как <code>digits</code> числа десятичных цифр.  


## Examples

### Example #1 
Округлить число -1,2 в сторону от нуля.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Округлить число 1,2 в сторону от нуля.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Округлить число –1,234 от нуля до двух знаков после запятой.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
