---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Повертає назву дня тижня.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Повертає ім’я дня тижня для заданого параметра `date`. Крім того, можна вказати необов’язковий параметр `culture` (наприклад, "uk-UA").


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
