---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Konwertuje składnik strefy czasowej na lokalną strefę czasową.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Zmienia informacje dotyczące strefy czasowej w wartości typu datetimezone <code>dateTimeZone</code> na informacje dotyczące lokalnej strefy czasowej.    Jeśli wartość <code>dateTimeZone</code> nie ma składnika strefy czasowej, dodawane są informacje dotyczące lokalnej strefy czasowej.


## Examples

### Example #1 
Zmień informacje dotyczące strefy czasowej dla wartości typu #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na informacje dotyczące lokalnej strefy czasowej (przy założeniu PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
