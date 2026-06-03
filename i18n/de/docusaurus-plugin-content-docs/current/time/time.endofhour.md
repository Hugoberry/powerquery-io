---
title: Time.EndOfHour
---

# Time.EndOfHour


Gibt das Ende der Stunde zurück.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Gibt das Ende der Stunde, das durch `dateTime` dargestellt wird, zurück (einschließlich Sekundenbruchteilen). Die Zeitzoneninformationen bleiben erhalten.

-   `dateTime`: Ein `time`\-, `datetime`\- oder `datetimezone`\-Wert, auf dessen Grundlage das Ende der Stunde berechnet wird.


## Examples

### Example #1
Ruft das Ende der Stunde für den 14.05.2011, 17:00:00 Uhr ab.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Ruft das Ende der Stunde für den 17.05.2011, 17:00:00 Uhr (-7:00) ab.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
