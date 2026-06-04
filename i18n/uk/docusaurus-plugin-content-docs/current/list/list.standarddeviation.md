---
title: List.StandardDeviation
---

# List.StandardDeviation


Повертає оцінку стандартного відхилення на основі зразка.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Повертає обчислення стандартного відхилення значень у списку `numbersList` на основі зразка. Якщо `numbersList` – список чисел, повертається число. Для пустого списку або списку елементів, які не належать до типу `number`, генерується повідомлення про помилку.


## Examples

### Example #1
Знайти стандартне відхилення чисел від 1 до 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
