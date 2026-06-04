---
title: Number.RoundDown
---

# Number.RoundDown


Повертає попереднє найбільше число. Кількість десяткових знаків можна вказувати.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Повертає результат округлення значення аргументу "`number`" у меншу сторону до попереднього найбільшого цілого числа. Якщо аргумент "`number`" має Null-значення, ця функція повертає Null-значення. Якщо вказано аргумент "`digits`", значення аргументу "`number`" округлюється до числа з вказаною кількістю десяткових знаків.


## Examples

### Example #1
Округлити 1,234 в меншу сторону до цілого числа.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Округлити 1,999 в меншу сторону до цілого числа.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3
Округлення числа 1,999 до числа з двома десятковими знаками в меншу сторону.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
