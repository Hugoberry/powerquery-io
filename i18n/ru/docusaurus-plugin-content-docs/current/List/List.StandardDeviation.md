---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Возвращает основанную на выборке оценку стандартного отклонения.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Возвращает основанную на выборке оценку стандартного отклонения значений в списке <code>numbersList</code>.    Если <code>numbersList</code> — список чисел, возвращается число.    Исключение возникает при пустом списке или списке элементов, не имеющих тип <code>number</code>.


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
