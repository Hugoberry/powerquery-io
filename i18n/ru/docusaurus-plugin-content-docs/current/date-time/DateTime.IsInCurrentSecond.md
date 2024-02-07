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

Указывает, наступает ли данный момент времени (<code>dateTime</code>) в течение текущей секунды, по расчету на основе текущей системной даты и времени.      <ul>      <li><code>dateTime</code>: вычисляемое значение <code>datetime</code> или <code>datetimezone</code>.</li>      </ul>


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
