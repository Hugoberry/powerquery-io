---
title: List.Generate
---

# List.Generate


## Description

Створює список значень.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Створює список значень, використовуючи вказані функції. Функція <code>initial</code> створює початкове значення кандидата, яке потім тестується за <code>condition</code>.    Якщо значення кандидата затверджується, воно повертається як частина отримуваного списку, а потім передаванням щойно затвердженого значення <code>next</code> створюється наступне значення кандидата.    Якщо значення кандидата не відповідає <code>condition</code>, створення списку зупиняється.    Додатковий параметр <code>selector</code> дає змогу задати перетворення елементів в отриманому списку.


## Examples

### Example #1 
Створити список чисел, що починається з десяти. Числа почергового зменшуються на один. В усіх елементів має бути значення, більше за нуль.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Створює список записів, що містить x та y, де x – значення, а y – список. x має бути менше 10 і представляє кількість елементів у списку y. Після створення списку повертає лише значення x.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
