---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Возвращает число от 1 до 6, указывающее неделю в месяце, на которую приходится эта дата.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Возвращает число от 1 до 6, указывающее неделю в месяце, на которую приходится дата <code>dateTime</code>. <ul>        <li><code>dateTime</code>: значение <code>datetime</code>, для которого определяется неделя в месяце.</li>      </ul>


## Examples

### Example #1 
Определить, на какую неделю марта приходится 15 марта 2011 г.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
