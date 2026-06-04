---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Odstrani podatke o časovnem pasu iz dane vrednosti"datetimezone".


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Vrne vrednost"#datetime"iz `dateTimeZone`, pri čemer so odstranjeni podatki o časovnem pasu.


## Examples

### Example #1
Odstranite podatke o časovnem pasu iz vrednosti"#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0)".
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
