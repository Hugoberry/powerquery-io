---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Iš pateiktos datos ir laiko juostos reikšmės pašalinama laiko juostos informacija.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

#datetime reikšmė pateikiama iš <code>dateTimeZone</code> su pašalinta laiko juostos informacija.


## Examples

### Example #1 
Pašalinkite laiko juostos informaciją iš reikšmės #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
