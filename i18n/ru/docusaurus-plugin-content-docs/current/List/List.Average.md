---
title: List.Average
---

# List.Average


## Description

Возвращает среднее арифметическое значений. Работает с числовыми значениями, значениями даты, datetime, datetimezone и длительности.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Возвращает среднее значение для элементов в списке <code>list</code>. Результат указывается с тем же типом данных, что и значения в списке. Работает только с числовыми значениями, значениями даты, времени, datetime, datetimezone и длительности.    Если список пуст, возвращается значение NULL.


## Examples

### Example #1 
Найти среднее значение списка чисел &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Найдите среднее значение из дат: 1 января 2011 г., 2 января 2011 г. и 3 января 2011 г.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
