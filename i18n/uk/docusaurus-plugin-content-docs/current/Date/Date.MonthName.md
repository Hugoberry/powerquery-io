---
title: Date.MonthName
---

# Date.MonthName


## Description

Повертає компонент назви місяця.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Повертає ім’я компонента місяця для заданого параметра <code>date</code>. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").


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
