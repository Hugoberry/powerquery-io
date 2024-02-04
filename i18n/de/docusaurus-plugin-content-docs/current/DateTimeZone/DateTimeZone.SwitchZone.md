---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Ändert die Zeitzone des Werts.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Ändert die Zeitzoneninformationen des datetimezone-Werts "<code>dateTimeZone</code>" in die neuen Zeitzoneninformationen, die von "<code>timezoneHours</code>" (und optional von "<code>timezoneMinutes</code>") angegeben wurden.    Besitzt "<code>dateTimeZone</code>" keine Zeitzonenkomponente, wird eine Ausnahme ausgelöst.


## Examples

### Example #1 
Ändert die Zeitzoneninformationen für &#34;#datetimezone (2010, 12, 31, 11, 56, 02, 7, 30)&#34; in 8 Stunden.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Ändert die Zeitzoneninformationen für &#39;#datetimezone (2010, 12, 31, 11, 56, 02, 7, 30)&#39; in -30 Minuten.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
