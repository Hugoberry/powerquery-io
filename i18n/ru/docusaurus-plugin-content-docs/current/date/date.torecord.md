---
title: Date.ToRecord
---

# Date.ToRecord


Возвращает запись, содержащую части значения даты.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Возвращает запись, содержащую части заданного значения даты, `date`.

-   `date`: значение `date`, для которого необходимо вычислить запись частей.


## Examples

### Example #1
Преобразовать значение `#date(2011, 12, 31)` в запись, содержащую состоит значения даты.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
