---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Возвращает конец года.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Возвращает конец года, который содержит <code>dateTime</code>, включая доли секунды. Данные о часовом поясе сохраняются.      <ul>        <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, на основе которого вычисляется конец года.</li>      </ul>


## Examples

### Example #1 
Возвращает конец года для 14.05.2011 17:00:00.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Получает конец часа для 17.05.2011 17:00:00-7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
