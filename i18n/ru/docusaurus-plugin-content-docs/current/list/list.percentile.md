---
title: List.Percentile
---

# List.Percentile


Возвращает выборку из одного или более процентилей, соответствующих заданным вероятностям.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Возвращает одну или несколько выборок процентилей из списка `list`. Если значение `percentiles` представляет собой число в диапазоне от 0,0 до 1,0, то оно будет рассматриваться как процентиль и результат будет представлять собой единственное значение, соответствующее данной вероятности. Если значение `percentiles` представляет собой список чисел со значениями в диапазоне от 0,0 до 1,0, то результат будет представлять собой список процентилей, соответствующих входной вероятности.  
  
Опытные пользователи могут выбрать более конкретный метод интерполяции с помощью варианта PercentileMode из записи "`options`", но в большинстве случаев это не рекомендуется. Существующие символы `PercentileMode.ExcelInc` и `PercentileMode.ExcelExc` соответствуют методам интерполяции, используемым в функциях Excel `PERCENTILE.INC` и `PERCENTILE.EXC`. Действие по умолчанию соответствует `PercentileMode.ExcelInc`. Символы `PercentileMode.SqlCont` и `PercentileMode.SqlDisc` аналогичны поведению SQL Server для `PERCENTILE_CONT` и `PERCENTILE_DISC` соответственно.


## Examples

### Example #1
Поиск первого квартиля списка `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Поиск квартилей списка `{5, 3, 1, 7, 9}` с использованием метода интерполяции, соответствующего `PERCENTILE.EXC` в Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
