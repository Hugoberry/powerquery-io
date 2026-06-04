---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Повертає результат округлення додатних чисел у меншу сторону та від'ємних – у більшу. Кількість десяткових знаків можна вказувати.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Повертає результат округлення значення аргументу "`number`" на основі знаку числа. Ця функція округлює додатні числа в меншу сторону та від'ємні – у більшу. Якщо вказано аргумент "`digits`", значення аргументу "`number`" округлюється до числа з такою кількістю десяткових знаків, яку виражає значення аргументу "`digits`".


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
