---
title: Time.EndOfHour
---

# Time.EndOfHour


Retourneert het einde van het uur.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Retourneert het einde van het uur dat wordt vertegenwoordigd door `dateTime`, inclusief fractionele seconden. Informatie over de tijdzone blijft behouden.

-   `dateTime`: een `tijdstip`, `datum/tijd` of `datum/tijdzone` waarmee het einde van het uur wordt berekend.


## Examples

### Example #1
Het einde van het uur ophalen voor 14/5/2011 05:00:00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Het einde van het uur ophalen voor 17/5/2011 07:00:00 PM.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
