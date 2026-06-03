---
title: List.StandardDeviation
---

# List.StandardDeviation


Возвращает основанную на выборке оценку стандартного отклонения.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Возвращает основанную на выборке оценку стандартного отклонения значений в списке `numbersList`. Если `numbersList` — список чисел, возвращается число. Если список пуст или состоит из элементов, тип которых отличен от `number`, возвращается ошибка.


## Examples

### Example #1
Найти стандартное отклонение чисел от 1 до 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
