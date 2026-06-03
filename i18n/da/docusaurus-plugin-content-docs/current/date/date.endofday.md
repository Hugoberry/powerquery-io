---
title: Date.EndOfDay
---

# Date.EndOfDay


Returnerer slutningen af dagen.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Returnerer slutningen af den dag, der repræsenteres af `dateTime`. Oplysningerom tidszone bevares.

-   `dateTime`: En værdi af typen `date`, `datetime` eller `datetimezone` hvorfra slutningen af dagen beregnes.


## Examples

### Example #1
Hent dagens slutning for 14-05-2011, 17:00:00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2
Hent dagens slutning for 17-05-2011, 17:00:00-7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
