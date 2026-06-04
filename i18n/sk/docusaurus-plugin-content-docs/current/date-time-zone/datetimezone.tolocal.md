---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Konvertuje komponent časového pásma na miestne časové pásmo.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Zmení informácie o časovom pásme hodnoty datetimezone `dateTimeZone` na informácie o miestnom časovom pásme. Ak funkcia `dateTimeZone` neobsahuje komponent časového pásma, pridajú sa informácie o miestnom časovom pásme.


## Examples

### Example #1
Zmeňte informácie o časovom pásme pre hodnotu #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na miestne časové pásmo (použije sa tichomorský čas).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
