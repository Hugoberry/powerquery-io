---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Konverterer tidszonekomponenten til UTC-tidszonen.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Ændrer tidszoneoplysninger for værdien af typen datetime, <code>dateTimeZone</code>, til UTC-tidszoneoplysningerne.    Hvis <code>dateTimeZone</code> ikke har en tidszonekomponent, tilføjes UTC-tidszoneoplysningerne.


## Examples

### Example #1 
Skift tidszoneoplysninger for #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) til UTC-tidszonen.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
