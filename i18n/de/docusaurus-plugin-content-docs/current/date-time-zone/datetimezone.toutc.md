---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Konvertiert die Zeitzonenkomponente in die UTC-Zeitzone.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Ändert die Zeitzoneninformationen des datetime-Werts "<code>dateTimeZone</code>" in die Zeitzoneninformationen für UTC oder Universalzeit.    Besitzt "<code>dateTimeZone</code>" keine Zeitzonenkomponente, werden die UTC-Zeitzoneninformationen hinzugefügt.


## Examples

### Example #1 
Ändert die Zeitzoneninformationen für &#34;#datetimezone (2010, 12, 31, 11, 56, 02, 7, 30)&#34; in die UTC-Zeitzone.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
