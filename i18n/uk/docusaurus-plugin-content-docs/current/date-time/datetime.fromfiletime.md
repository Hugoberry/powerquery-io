---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Створює дату й час із 64-розрядного числа.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Створює значення `datetime` зі значення `fileTime` та перетворює його на значення за місцевим часовим поясом. Filetime – це значення тривалості існування файлу Windows, яке представляє кількість 100-наносекундних інтервалів, які минули після півночі, 12:00, 1 січня 1601 р. нашої ери (від Різдва Христового) за всесвітнім координованим часом (UTC).


## Examples

### Example #1
Перетворення `129876402529842245` на значення дати й часу.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
