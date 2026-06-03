---
title: Date.AddQuarters
---

# Date.AddQuarters


Tilføjer de angivne kvartaler efter datoen.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Returnerer resultaterne for `date`, `datetime` eller `datetimezone` efter at have føjet `numberOfQuarters` kvartaler til værdien af typen `datetime` `dateTime`.

-   `dateTime`: Den værdi af typen `date`, `datetime` eller `datetimezone`, som kvartaler føjes til.
-   `numberOfQuarters`: Det antal kvartaler, der skal tilføjes.


## Examples

### Example #1
Føj 1 kvartal til værdien af typen `date`, `datetime` eller `datetimezone`, som repræsenterer datoen 14-05-2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
