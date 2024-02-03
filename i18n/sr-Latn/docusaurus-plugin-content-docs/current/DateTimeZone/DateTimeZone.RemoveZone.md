---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Uklanja informacije o vremenskoj zoni iz date vrednosti datuma i vremenske zone.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

Vraća vrednost #datetime iz <code>dateTimeZone</code> sa uklonjenim informacijama o vremenskoj zoni.


## Examples

### Example #1 
Uklanjanje informacija o vremenskoj zoni iz vrednosti #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
