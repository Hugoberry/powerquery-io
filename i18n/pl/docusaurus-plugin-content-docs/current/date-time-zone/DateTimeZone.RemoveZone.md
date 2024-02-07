---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Usuwa informacje dotyczące strefy czasowej z danej wartości typu datetimezone.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Zwraca wartość typu #datetime z wartości <code>dateTimeZone</code>, po usunięciu informacji dotyczących strefy czasowej.


## Examples

### Example #1 
Usuń informacje dotyczące strefy czasowej z wartości typu #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
