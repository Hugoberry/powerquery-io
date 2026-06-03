---
title: Time.Minute
---

# Time.Minute


Gibt die Minutenkomponente zurück.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Gibt die Minutenkomponente des angegebenen `time`\-, `datetime`\- oder `datetimezone`\-Werts "`dateTime`" zurück.


## Examples

### Example #1
Ermittelt die Minute in "#datetime(2011, 12, 31, 9, 15, 36)".
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
