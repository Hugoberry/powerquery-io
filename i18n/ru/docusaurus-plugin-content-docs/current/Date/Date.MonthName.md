---
title: Date.MonthName
---

# Date.MonthName


## Description

Возвращает название компонента месяца.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Возвращает название месяца для указанного значения <code>date</code>. Также может быть указан необязательный параметр <code>culture</code> (например, "ru-RU").


## Examples

### Example #1 
Получение названия месяца.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
