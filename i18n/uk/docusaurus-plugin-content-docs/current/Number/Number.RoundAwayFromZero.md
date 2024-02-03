---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Повертає результат округлення додатних чисел у більшу сторону та від&#39;ємних – у меншу. Кількість десяткових знаків можна вказувати.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Повертає результат округлення значення аргументу "<code>number</code>" на основі знаку числа. Ця функція округлює додатні числа в більшу сторону та від'ємні – у меншу.    Якщо вказано аргумент "<code>digits</code>", значення аргументу "<code>number</code>" округлюється до числа з такою кількістю десяткових знаків, яку виражає значення аргументу "<code>digits</code>".  


## Examples

### Example #1 
Округлити число -1,2 у напрямку від нуля.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Округлити число 1,2 у напрямку від нуля.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Округлення числа –1,234 до числа з двома десятковими знаками в меншу сторону.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
