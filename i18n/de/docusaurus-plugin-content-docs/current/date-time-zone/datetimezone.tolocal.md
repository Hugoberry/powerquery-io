---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Konvertiert die Zeitzonenkomponente in die lokale Zeitzone.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Ändert die Zeitzoneninformationen des datetimezone-Werts "`dateTimeZone`" in die lokalen Zeitzoneninformationen. Besitzt "`dateTimeZone`" keine Zeitzonenkomponente, werden die lokalen Zeitzoneninformationen hinzugefügt.


## Examples

### Example #1
Ändert die Zeitzoneninformationen für "#datetimezone (2010, 12, 31, 11, 56, 02, 7, 30)" in die lokale Zeitzone (PST vorausgesetzt).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
