---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Atgriež mēneša beigas.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Atgriež mēneša beigas vērtībā, kas satur <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, no kuras tiek aprēķinātas mēneša beigas.</li>      </ul>


## Examples

### Example #1 
Iegūstiet mēneša beigas vērtībai 14.05.2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Iegūstiet mēneša beigas vērtībai 17.05.2011. plkst. 17:00:00 -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
