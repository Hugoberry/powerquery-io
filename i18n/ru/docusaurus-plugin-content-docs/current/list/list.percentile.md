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

Возвращает выборку из одного или более процентилей из списка <code>list</code>. Если значение <code>percentiles</code> является числом от 0,0 до 1,0, то оно будет рассматриваться как процентиль и результат будет представлять собой    единственное значение, соответствующее данной вероятности. Если значение <code>percentiles</code> является списком чисел со значениями в диапазоне от 0,0 до 1,0, то результат будет представлять собой список процентилей,    соответствующих входной вероятности. Опытные пользователи могут выбрать более конкретный метод интерполяции с помощью параметра PercentileMode из записи "<code>options</code>", но в большинстве случаев это не рекомендуется.    Предварительно заданные символы <code>PercentileMode.ExcelInc</code> и <code>PercentileMode.ExcelExc</code> соответствуют методам интерполяции, используемым в функциях Excel    <code>PERCENTILE.INC</code> и <code>PERCENTILE.EXC</code>. Действие по умолчанию соответствует <code>PercentileMode.ExcelInc</code>. Символы    <code>PercentileMode.SqlCont</code> и <code>PercentileMode.SqlDisc</code> аналогичны действиям SQL Server для <code>PERCENTILE_CONT</code>    и <code>PERCENTILE_DISC</code> соответственно.  


## Examples

### Example #1 
Поиск первого квартиля списка &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Поиск квартилей списка &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; с использованием метода интерполяции, соответствующего &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; в Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
