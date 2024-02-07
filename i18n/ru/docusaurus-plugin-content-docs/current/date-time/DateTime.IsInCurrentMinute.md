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

Указывает, наступает ли данный момент времени (<code>dateTime</code>) в течение текущей минуты, по расчету на основе текущей системной даты и времени.      <ul>      <li><code>dateTime</code>: вычисляемое значение <code>datetime</code> или <code>datetimezone</code>.</li>      </ul>


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
