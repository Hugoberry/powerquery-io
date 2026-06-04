---
title: List.Percentile
---

# List.Percentile


Повертає один або кілька зразків процентилів, що відповідають заданим імовірностям.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Повертає один або кілька зразків процентилів для списку `list`. Якщо значення `percentiles` – це число від 0,0 до 1,0, воно обчислюватиметься як процентиль і в результаті ви отримаєте одне значення, яке відповідає ймовірності. Якщо значення `percentiles` – це список чисел від 0,0 до 1,0, у результаті ви отримаєте список процентилів, що відповідають імовірності для вхідних даних.  
  
Досвідчені користувачі можуть указувати параметр PercentileMode у виразі `options`, щоб вибрати точніший метод інтерполяції, але не його не слід використовувати всім. Попередньо визначені символи для функцій `PercentileMode.ExcelInc` і `PercentileMode.ExcelExc` відповідають методам інтерполяції, які використовують функції Excel. `PERCENTILE.INC` і `PERCENTILE.EXC`. За замовчуванням діють як `PercentileMode.ExcelInc`. Символи для функцій `PercentileMode.SqlCont` і `PercentileMode.SqlDisc` відповідають `PERCENTILE_CONT` і `PERCENTILE_DISC` в SQL Server.


## Examples

### Example #1
Пошук першого квартиля для списку `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Пошук квартилів для списку `{5, 3, 1, 7, 9}` методом інтерполяції, що відповідає `PERCENTILE.EXC` в Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
