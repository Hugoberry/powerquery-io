---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Konvertuje komponentu vremenske zone u lokalnu vremensku zonu.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Menja informacije o vremenskoj zoni za vrednost datuma i vremenske zone <code>dateTimeZone</code> u informacije o lokalnoj vremenskoj zoni.    Ako <code>dateTimeZone</code> nema komponentu vremenske zone, dodaju se informacije o lokalnoj vremenskoj zoni.


## Examples

### Example #1 
Promena informacija o vremenskoj zoni za #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na lokalnu vremensku zonu (podrazumeva se PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
