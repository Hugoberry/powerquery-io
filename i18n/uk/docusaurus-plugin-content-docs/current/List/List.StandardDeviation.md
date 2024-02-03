---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Повертає оцінку стандартного відхилення на основі зразка.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Повертає обчислення стандартного відхилення значень у списку <code>numbersList</code> на основі зразка.    Якщо <code>numbersList</code> – список чисел, повертається число.    Для пустого списку або списку елементів, які не належать до типу <code>number</code>, повертається виняткова ситуація.


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
