---
title: Time.Second
---

# Time.Second


Gibt die Sekundenkomponente zurück.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Gibt die Sekundenkomponente des angegebenen `time`\-, `datetime`\- oder `datetimezone`\-Werts "`dateTime`" zurück.


## Examples

### Example #1
Ermittelt den zweiten Wert aus einem datetime-Wert.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
