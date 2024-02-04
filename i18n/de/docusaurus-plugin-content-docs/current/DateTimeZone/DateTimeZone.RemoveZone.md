---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Entfernt Zeitzoneninformationen aus dem angegebenen datetimezone-Wert.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

Gibt einen #datetime-Wert aus "<code>dateTimeZone</code>" mit entfernten Zeitzoneninformationen zurück.


## Examples

### Example #1 
Entfernt Zeitzoneninformationen aus dem Wert &#34;#datetimezone (2011, 12, 31, 9, 15, 36, -7, 0)&#34;.
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
