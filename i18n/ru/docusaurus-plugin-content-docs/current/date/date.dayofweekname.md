---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Возвращает название дня недели.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Возвращает название дня недели для указанного значения <code>date</code>. Также может быть указан необязательный параметр <code>culture</code> (например, "ru-RU").


## Examples

### Example #1 
Получение названия дня недели.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
