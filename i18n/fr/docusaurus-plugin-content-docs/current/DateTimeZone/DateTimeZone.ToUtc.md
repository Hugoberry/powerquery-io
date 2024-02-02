---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Convertit le composant de fuseau en fuseau horaire UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Modifie les informations de fuseau de la valeur datetime <code>dateTimeZone</code> en informations de fuseau horaire UTC ou de temps universel.    Si <code>dateTimeZone</code> n'a pas de composant de fuseau horaire, les informations de fuseau UTC sont ajoutées.


## Examples

### Example #1 
Modifiez les informations de fuseau horaire pour #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) en fuseau horaire UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
