---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Retorna um registro contendo as partes do valor datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Retorna um registro contendo as partes do valor datetimezone especificado, <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: um valor <code>datetimezone</code> com base no qual o registro das partes será calculado.</li>      </ul>


## Examples

### Example #1 
Converta o valor &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; em um registro contendo os valores Date, Time e Zone.
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
