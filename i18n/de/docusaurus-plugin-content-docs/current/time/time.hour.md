---
title: Time.Hour
---

# Time.Hour


Gibt die Stundenkomponente zurück.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Gibt die Stundenkomponente des angegebenen `time`\-, `datetime`\- oder `datetimezone`\-Werts "`dateTime`" zurück.


## Examples

### Example #1
Ermittelt die Stunde in "#datetime(2011, 12, 31, 9, 15, 36)".
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
