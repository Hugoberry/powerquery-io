---
title: Time.EndOfHour
---

# Time.EndOfHour


Restituisce la fine dell’ora.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Restituisce la fine dell'ora rappresentata da `dateTime`, inclusi i secondi frazionari. Le informazioni del fuso orario sono mantenute.

-   `dateTime`: valore `time`, `datetime` o `datetimezone` da cui viene calcolata la fine dell'ora.


## Examples

### Example #1
Ottenere la fine dell'ora per 5/14/2011 05:00:00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Ottenere la fine dell'ora per 5/17/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
