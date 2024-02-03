---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Повертає результат округлення додатних чисел у меншу сторону та від&#39;ємних – у більшу. Кількість десяткових знаків можна вказувати.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Повертає результат округлення значення аргументу "<code>number</code>" на основі знаку числа. Ця функція округлює додатні числа в меншу сторону та від'ємні – у більшу.    Якщо вказано аргумент "<code>digits</code>", значення аргументу "<code>number</code>" округлюється до числа з такою кількістю десяткових знаків, яку виражає значення аргументу "<code>digits</code>".  


## Examples

### Example #1 
Округлити число -1,2 у напрямку до нуля.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Округлити число 1,2 у напрямку до нуля.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Округлення числа –1,234 до числа з двома десятковими знаками в більшу сторону.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
