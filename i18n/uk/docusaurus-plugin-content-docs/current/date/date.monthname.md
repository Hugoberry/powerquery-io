---
title: Date.MonthName
---

# Date.MonthName


Повертає компонент назви місяця.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Повертає ім’я компонента місяця для заданого параметра `date`. Крім того, можна вказати необов’язковий параметр `culture` (наприклад, "uk-UA").


## Examples

### Example #1
Отримання назви місяця.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
