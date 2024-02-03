---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Указывает, наступает ли данный момент времени в течение текущего часа, по расчету на основе текущей системной даты и времени.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Указывает, наступает ли данный момент времени (<code>dateTime</code>) в течение текущего часа, по расчету на основе текущей системной даты и времени.      <ul>      <li><code>dateTime</code>: вычисляемое значение <code>datetime</code> или <code>datetimezone</code>.</li>      </ul>


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
