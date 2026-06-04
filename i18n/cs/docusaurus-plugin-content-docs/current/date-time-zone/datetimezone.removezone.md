---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Odebere údaj o časovém pásmu z dané hodnoty datetimezone.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Vrátí hodnotu #datetime z `dateTimeZone` s odebraným údajem o časovém pásmu.


## Examples

### Example #1
Odebrat údaj o časovém pásmu z hodnoty #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
