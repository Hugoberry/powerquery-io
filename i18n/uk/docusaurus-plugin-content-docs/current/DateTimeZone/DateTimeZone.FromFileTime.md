---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Створює з 64-розрядного числа дату й час із часовим поясом.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Створює значення <code>datetimezone</code> зі значення "<code>fileTime</code>", а також перетворює його на значення за місцевим часовим поясом. Час файлу – це значення часу для файлу Windows, яке представляє кількість 100-наносекундних інтервалів, які минули після півночі (00:00) 1 січня 1601 р. н. е. (від Різдва Христового) за всесвітнім координованим часом (UTC).    


## Examples

### Example #1 
Перетворити &lt;code&gt;129876402529842245&lt;/code&gt; на значення дати й часу з часовим поясом.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
