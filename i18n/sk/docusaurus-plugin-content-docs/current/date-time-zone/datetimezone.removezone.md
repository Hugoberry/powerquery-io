---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Odstráni informácie o časovom pásme z danej hodnoty datetimezone.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Vráti hodnotu #datetime z funkcie `dateTimeZone` s odstránenými informáciami o časovom pásme.


## Examples

### Example #1
Odstráňte informácie o časovom pásme z hodnoty #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
