---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Возвращает запись, содержащую части значения datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Возвращает запись, содержащую части заданного значения datetimezone, <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: значение <code>datetimezone</code>, для которого необходимо вычислить запись частей.</li>      </ul>


## Examples

### Example #1 
Преобразование значения &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; в запись, содержащую значения даты, времени и часового пояса.
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
