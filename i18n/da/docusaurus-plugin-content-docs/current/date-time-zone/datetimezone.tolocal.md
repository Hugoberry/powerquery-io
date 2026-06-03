---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Konverterer tidszonekomponenten til den lokale tidszone.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Ændrer tidszoneoplysninger for værdien af typen datetimezone, `dateTimeZone`, til de lokale tidszoneoplysninger. Hvis `dateTimeZone` ikke har en tidszonekomponent, tilføjes de lokale tidszoneoplysninger.


## Examples

### Example #1
Skift tidszoneoplysninger for #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) til den lokale tidszone (der anvender PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
