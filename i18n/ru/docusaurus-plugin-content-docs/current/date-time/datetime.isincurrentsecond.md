---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Указывает, наступает ли данный момент времени в течение текущей секунды, по расчету на основе текущей системной даты и времени.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Указывает, наступает ли данный момент времени (`dateTime`) в течение текущей секунды, по расчету на основе текущей системной даты и времени.

-   `dateTime`: вычисляемое значение `datetime` или `datetimezone`.


## Examples

### Example #1
Определяет, находится ли текущее системное время в текущей секунде.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
