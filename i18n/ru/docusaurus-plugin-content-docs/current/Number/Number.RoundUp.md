---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Возвращает наибольшее следующее число. Можно указать число цифр.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Возвращает результат округления <code>number</code> в большую сторону к следующему наибольшему целому числу. Если <code>number</code> имеет значение NULL, эта функция возвращает NULL.    Если задано <code>digits</code>, <code>number</code> округляется до указанного количества десятичных цифр.  


## Examples

### Example #1 
Округлить 1,234 в большую сторону до целого числа.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Округлить 1,999 в большую сторону до целого числа.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Округлить число 1,234 до двух знаков после запятой.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
