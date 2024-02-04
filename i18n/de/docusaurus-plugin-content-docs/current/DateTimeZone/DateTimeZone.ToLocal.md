---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Konvertiert die Zeitzonenkomponente in die lokale Zeitzone.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Ändert die Zeitzoneninformationen des datetimezone-Werts "<code>dateTimeZone</code>" in die lokalen Zeitzoneninformationen.    Besitzt "<code>dateTimeZone</code>" keine Zeitzonenkomponente, werden die lokalen Zeitzoneninformationen hinzugefügt.


## Examples

### Example #1 
Ändert die Zeitzoneninformationen für &#34;#datetimezone (2010, 12, 31, 11, 56, 02, 7, 30)&#34; in die lokale Zeitzone (PST vorausgesetzt).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
