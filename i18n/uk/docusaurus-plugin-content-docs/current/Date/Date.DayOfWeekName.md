---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Повертає назву дня тижня.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Повертає ім’я дня тижня для заданого параметра <code>date</code>. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").


## Examples

### Example #1 
Отримання назви дня тижня.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
