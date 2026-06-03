---
title: Date.AddYears
---

# Date.AddYears


Tilføjer de angivne år efter datoen.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Returnerer resultaterne for `date`, `datetime` eller `datetimezone` efter at have føjet `numberOfYears` til værdien af typen `datetime` `dateTime`.

-   `dateTime`: Den værdi af typen `date`, `datetime` eller `datetimezone`, som år føjes til.
-   `numberOfYears`: Det antal år, der skal tilføjes.


## Examples

### Example #1
Føj 4 år til værdien af typen `date`, `datetime` eller `datetimezone`, som repræsenterer datoen 14-05-2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Føj 10 år til værdien af typen `date`, `datetime` eller `datetimezone`, som repræsenterer datoen og klokkeslættet 14-05-2011, 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
