---
title: List.Numbers
---

# List.Numbers


Возвращает список чисел для заданного исходного значения, количества и необязательного значения приращения.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Возвращает список чисел для заданного исходного значения, количества и необязательного значения приращения. Значение приращения по умолчанию - 1.<ul>   <li><code>start</code>: исходное значение в списке.</li>   <li><code>count</code>: количество значений, которое требуется создать.</li>   <li><code>increment</code>: <i>[Необязательно]</i> Значение, на которое выполняется увеличение. Если не указано иное, значение увеличивается с шагом 1.</li></ul>


## Examples

### Example #1 
Создать список из 10 последовательных чисел, начиная с 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
Создать список чисел из 10 чисел, начиная с 1, с шагом 2 для каждого последующего числа.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
