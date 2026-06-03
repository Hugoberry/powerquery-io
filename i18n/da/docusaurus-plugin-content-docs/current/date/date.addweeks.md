---
title: Date.AddWeeks
---

# Date.AddWeeks


Tilføjer de angivne uger efter datoen.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Returnerer resultaterne for `date`, `datetime` eller `datetimezone` efter at have føjet `numberOfWeeks` uger til værdien af typen `datetime` `dateTime`.

-   `dateTime`: Den værdi af typen `date`, `datetime` eller `datetimezone`, som uger føjes til.
-   `numberOfWeeks`: Det antal uger, der skal tilføjes.


## Examples

### Example #1
Føj 2 uger til værdien af typen `date`, `datetime` eller `datetimezone`, som repræsenterer datoen 14-05-2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
