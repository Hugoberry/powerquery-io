---
title: Date.AddMonths
---

# Date.AddMonths


Tilføjer de angivne måneder efter datoen.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Returnerer resultaterne for `date`, `datetime` eller `datetimezone` efter at have føjet `numberOfMonths` måneder til værdien af typen `datetime` `dateTime`.

-   `dateTime`: Den værdi af typen `date`, `datetime` eller `datetimezone`, som måneder føjes til.
-   `numberOfMonths`: Det antal måneder, der skal tilføjes.


## Examples

### Example #1
Føj 5 måneder til værdien af typen `date`, `datetime` eller `datetimezone`, som repræsenterer datoen 14-05-2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Føj 18 måneder til værdien af typen `date`, `datetime` eller `datetimezone`, som repræsenterer datoen og klokkeslættet 14-05-2011, 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
