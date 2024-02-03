---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Возвращает конец квартала.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Возвращает конец квартала, который содержит <code>dateTime</code>. Данные о часовом поясе сохраняются.      <ul>      <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, на основе которого вычисляется конец квартала.</li>      </ul>


## Examples

### Example #1 
Поиск конца квартала для 10 октября 2011 г., 8:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
