---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


Повертає результат округлення додатних чисел у більшу сторону та від'ємних – у меншу. Кількість десяткових знаків можна вказувати.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Повертає результат округлення значення аргументу "`number`" на основі знаку числа. Ця функція округлює додатні числа в більшу сторону та від'ємні – у меншу. Якщо вказано аргумент "`digits`", значення аргументу "`number`" округлюється до числа з такою кількістю десяткових знаків, яку виражає значення аргументу "`digits`".


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
