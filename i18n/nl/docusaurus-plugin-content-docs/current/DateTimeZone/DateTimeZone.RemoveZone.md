---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Verwijdert informatie over de tijdzone uit de opgegeven datum-/tijdzonewaarde.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

Retourneert een waarde #datetime van <code>dateTimeZone</code> waaruit de informatie over de tijdzone is verwijderd.


## Examples

### Example #1 
Informatie over de tijdzone verwijderen uit de waarde #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
