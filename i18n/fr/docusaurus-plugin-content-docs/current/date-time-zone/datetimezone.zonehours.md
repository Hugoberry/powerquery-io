---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Permet d’obtenir l’heure du fuseau horaire de la valeur.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Renvoie composant Heure du fuseau horaire d’une valeur `datetimezone`.

-   `dateTimeZone` : une valeur `datetimezone` à partir de laquelle le composant Heure du fuseau horaire est extrait. Si`dateTimeZone` est `nul`, la fonction renvoie `nul`.


## Examples

### Example #1
Obtenez le composant Heures du fuseau horaire de la valeur `datetimezone` spécifiée.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
