---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Vrátí záznam obsahující části hodnoty datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Vrátí záznam obsahující části předané hodnoty datetimezone, <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: Hodnota <code>datetimezone</code>, ze které bude vypočítán záznam jejích částí.</li>      </ul>


## Examples

### Example #1 
Převede hodnotu &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; na záznam obsahující hodnoty data, času a časového pásma.
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
