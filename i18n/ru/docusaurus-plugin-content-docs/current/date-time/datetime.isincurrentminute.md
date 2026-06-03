---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Указывает, наступает ли данный момент времени в течение текущей минуты, по расчету на основе текущей системной даты и времени.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Указывает, наступает ли данный момент времени (`dateTime`) в течение текущей минуты, по расчету на основе текущей системной даты и времени.

-   `dateTime`: вычисляемое значение `datetime` или `datetimezone`.


## Examples

### Example #1
Определяет, находится ли текущее системное время в текущей минуте.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
