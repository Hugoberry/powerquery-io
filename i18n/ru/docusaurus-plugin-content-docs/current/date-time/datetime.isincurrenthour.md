---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Указывает, наступает ли данный момент времени в течение текущего часа, по расчету на основе текущей системной даты и времени.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Указывает, наступает ли данный момент времени (`dateTime`) в течение текущего часа, по расчету на основе текущей системной даты и времени.

-   `dateTime`: вычисляемое значение `datetime` или `datetimezone`.


## Examples

### Example #1
Определяет, находится ли текущее системное время в текущем часе.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
