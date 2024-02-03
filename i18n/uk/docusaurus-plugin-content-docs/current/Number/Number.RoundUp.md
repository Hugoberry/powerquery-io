---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Повертає наступне найбільше число. Кількість десяткових знаків можна вказувати.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Повертає результат округлення значення аргументу "<code>number</code>" у більшу сторону до наступного найбільшого цілого числа. Якщо аргумент "<code>number</code>" має Null-значення, ця функція повертає Null-значення.    Якщо вказано аргумент "<code>digits</code>", значення аргументу "<code>number</code>" округлюється до числа з вказаною кількістю десяткових знаків.  


## Examples

### Example #1 
Округлити 1,234 у більшу сторону до цілого числа.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Округлити 1,999 у більшу сторону до цілого числа.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Округлення числа 1,234 до числа з двома десятковими знаками в більшу сторону.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
