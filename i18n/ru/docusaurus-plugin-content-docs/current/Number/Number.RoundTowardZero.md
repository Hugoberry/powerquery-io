---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Возвращает результат округления положительных чисел в меньшую сторону и отрицательных чисел в большую. Можно указать число цифр.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Возвращает результат округления <code>number</code> в зависимости от знака числа. Эта функция будет округлять положительные числа в меньшую сторону, а отрицательные - в большую.    Если задано <code>digits</code>, то <code>number</code> округляется до заданного как <code>digits</code> числа десятичных цифр.  


## Examples

### Example #1 
Округлить -1,2 в направлении к нулю.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Округлить 1,2 в направлении к нулю.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Округлить число –1,234 к нулю до двух знаков после запятой.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
