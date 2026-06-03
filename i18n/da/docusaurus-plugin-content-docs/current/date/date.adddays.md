---
title: Date.AddDays
---

# Date.AddDays


Tilføjer de angivne dage efter datoen.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Returnerer resultaterne for `date`, `datetime` eller `datetimezone` efter at have føjet `numberOfDays` dage til værdien af typen `datetime` `dateTime`.

-   `dateTime`: Den værdi af typen `date`, `datetime` eller `datetimezone`, som dage føjes til.
-   `numberOfDays`: Det antal dage, der skal tilføjes.


## Examples

### Example #1
Føj 5 dage til værdien af typen `date`, `datetime` eller `datetimezone`, som repræsenterer datoen 14-05-2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
