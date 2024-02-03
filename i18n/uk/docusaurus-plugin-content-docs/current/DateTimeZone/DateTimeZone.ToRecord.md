---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Повертає запис, що містить частини значення дати й часу з часовим поясом.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Повертає запис, що містить частини заданого значення дати й часу з часовим поясом <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: значення <code>datetimezone</code>, на основі якого слід обчислити запис частин.</li>      </ul>


## Examples

### Example #1 
Перетворити значення &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; на запис, що містить значення дати, часу та часового поясу.
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
