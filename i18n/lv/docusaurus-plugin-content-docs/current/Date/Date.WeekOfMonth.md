---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Atgriež skaitli no 1 līdz 6, kas norāda, kurā mēneša nedēļā iekrīt šis datums.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Atgriež skaitli no 1 līdz 6, kas norāda, kurā mēneša nedēļā iekrīt datums <code>dateTime</code>. <ul>        <li><code>dateTime</code>: <code>datetime</code> vērtība, kurai tiek noteikta mēneša nedēļas vērtība.</li>      </ul>


## Examples

### Example #1 
Nosakiet, kurā 2011. gada marta nedēļā ir 15. datums.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
