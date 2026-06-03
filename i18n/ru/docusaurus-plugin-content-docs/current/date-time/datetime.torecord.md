---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Возвращает запись, содержащую части значения datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Возвращает запись, содержащую части заданного значения datetime, `dateTime`.

-   `dateTime`: значение `datetime`, для которого необходимо вычислить запись частей.


## Examples

### Example #1
Преобразование значения `#datetime(2011, 12, 31, 11, 56, 2)` в запись, содержащую значения даты и времени.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
