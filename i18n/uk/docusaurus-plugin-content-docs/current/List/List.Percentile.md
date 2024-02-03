---
title: List.Percentile
---

# List.Percentile


## Description

Повертає один або кілька зразків процентилів, що відповідають заданим імовірностям.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Повертає один або кілька зразків процентилів для списку <code>list</code>. Якщо значення <code>percentiles</code> – це число від 0,0 до 1,0, воно обчислюватиметься як процентиль і в результаті ви отримаєте     одне значення, яке відповідає ймовірності. Якщо значення <code>percentiles</code> – це список чисел від 0,0 до 1,0, у результаті ви отримаєте список процентилів,    що відповідають імовірності для вхідних даних. Досвідчені користувачі можуть указувати параметр PercentileMode у виразі <code>options</code>, щоб вибрати точніший метод інтерполяції, але не його не слід використовувати всім.    Попередньо визначені символи для функцій <code>PercentileMode.ExcelInc</code> і <code>PercentileMode.ExcelExc</code> відповідають методам інтерполяції, які використовують функції Excel.    <code>PERCENTILE.INC</code> і <code>PERCENTILE.EXC</code> за замовчуванням діють як <code>PercentileMode.ExcelInc</code>. Символи для функцій     <code>PercentileMode.SqlCont</code> і <code>PercentileMode.SqlDisc</code> відповідають <code>PERCENTILE_CONT</code> і    <code>PERCENTILE_DISC</code> в SQL Server.  


## Examples

### Example #1 
Пошук першого квартиля для списку &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Пошук квартилів для списку &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; методом інтерполяції, що відповідає &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; в Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
