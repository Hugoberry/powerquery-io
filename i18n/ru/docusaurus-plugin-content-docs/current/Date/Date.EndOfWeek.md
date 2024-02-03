---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Возвращает конец недели.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Возвращает конец недели, которая содержит <code>dateTime</code>.    Эта функция принимает необязательное значение <code>Day</code>, <code>firstDayOfWeek</code>, для установки первого дня недели для относительного вычисления. Значение по умолчанию: <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, на основе которого вычисляется последний день недели.</li>        <li><code>firstDayOfWeek</code>: <i>[Необязательно]</i> Значение <code>Day.Type</code>, представляющее первый день недели. Допустимые значения: <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> и <code>Day.Saturday.</code>. Значение по умолчанию — <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Возвращает конец недели для 14.05.2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Получает конец недели для 17.05.2011 17:00:00-7:00, если воскресенье - первый день недели.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
