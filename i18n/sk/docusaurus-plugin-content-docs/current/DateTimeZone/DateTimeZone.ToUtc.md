---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Konvertuje komponent časového pásma na časové pásmo UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Zmení informácie o časovom pásme hodnoty dátumu a času <code>dateTimeZone</code> na informácie o časovom pásme UTC alebo svetovom čase.    Ak funkcia <code>dateTimeZone</code> neobsahuje komponent časového pásma, pridajú sa informácie o časovom pásme UTC.


## Examples

### Example #1 
Zmeňte informácie o časovom pásme pre hodnotu #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na časové pásmo UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
