---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Returnerar ett tal från 1 till 6 som anger vilken vecka i månaden som datumet infaller under.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Returnerar ett tal från 1 till 6 som anger vilken vecka i månaden som datumet <code>dateTime</code> infaller i. <ul>        <li><code>dateTime</code>: Ett <code>datetime</code>-värde från vilken vecka-i-månaden fastställs.</li>      </ul>


## Examples

### Example #1 
Kontrollera vilken vecka som den 15 mars infaller under år 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
