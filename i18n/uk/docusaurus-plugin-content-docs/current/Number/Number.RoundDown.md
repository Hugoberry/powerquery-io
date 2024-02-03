---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Повертає попереднє найбільше число. Кількість десяткових знаків можна вказувати.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Повертає результат округлення значення аргументу "<code>number</code>" у меншу сторону до попереднього найбільшого цілого числа. Якщо аргумент "<code>number</code>" має Null-значення, ця функція повертає Null-значення.    Якщо вказано аргумент "<code>digits</code>", значення аргументу "<code>number</code>" округлюється до числа з вказаною кількістю десяткових знаків.  


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
