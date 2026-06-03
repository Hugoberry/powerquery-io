---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Récupère les minutes du fuseau horaire de la valeur.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Renvoie la composante minutes du fuseau horaire d'une valeur \`datetimezone\`.

-   `dateTimeZone` : Une valeur `datetimezone` dont est extraite la composante des minutes du fuseau horaire. Si `dateTimeZone` est `nul`, la fonction renvoie `nul`.


## Examples

### Example #1
Obtenez le composant Minutes du fuseau horaire de la valeur \`datetimezone\` spécifiée.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
