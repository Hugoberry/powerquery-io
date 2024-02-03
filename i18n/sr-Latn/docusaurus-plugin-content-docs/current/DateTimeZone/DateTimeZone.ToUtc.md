---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Konvertuje komponentu vremenske zone u UTC vremensku zonu.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Menja informacije o vremenskoj zoni za vrednost datuma i vremena <code>dateTimeZone</code> u informacije o vremenskoj zoni UTC vremena ili univerzalnog vremena.    Ako <code>dateTimeZone</code> nema komponentu vremenske zone, dodaju se informacije o vremenskoj zoni UTC vremena.


## Examples

### Example #1 
Promena informacija o vremenskoj zoni za #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na vremensku zonu UTC vremena.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
