---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

Возвращает конец часа.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

Возвращает конец часа, который представлен с использованием <code>dateTime</code>, включая доли секунды. Данные о часовом поясе сохраняются.      <ul>        <li><code>dateTime</code>: значение <code>time</code>, <code>datetime</code> или <code>datetimezone</code>, на основе которого вычисляется конец часа.</li>      </ul>


## Examples

### Example #1 
Получить конец часа для 14.05.2011 17:00:00.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Получить конец часа для 17.05.2011 17:00:00-7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
