---
title: Date.Day
---

# Date.Day


Returnerer dagskomponenten.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Returnerer dagskomponenten for en værdi af typen `date`, `datetime` eller `datetimezone`.

-   `dateTime`: En værdi af typen `date`, `datetime` eller `datetimezone`, som dagskomponenten er hentet fra.


## Examples

### Example #1
Hent dagskomponenten for en værdi af typen `date`, `datetime` eller `datetimezone`, som repræsenterer datoen og klokkeslættet 14-05-2011, 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
